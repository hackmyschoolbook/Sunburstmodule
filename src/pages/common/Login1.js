import React, { Component } from 'react'
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import { loginUser, logoutUser } from "../../redux/actions/commonActions";
import { Row, Col, Card, Input, Button, Modal, Alert, message, Tag, Spin, Badge, Carousel, Result, Typography } from 'antd';
import axios from "axios";
import config from "../../config";
import { UserOutlined, LockOutlined, MailOutlined, EnterOutlined, EditOutlined } from '@ant-design/icons';
const { Meta } = Card;
const { Text } = Typography;
message.config({
    top: 0,
    duration: 2,
    maxCount: 3,
});

class SignIn extends Component {

    state = {
        visible: false,
        loginBtnLoading: false,
        Username1: '',
        Password: '',
        fUsername: '',
        fMail: '',
        flags: '',
        serverstatus: 0,
        loading: false,
        mailMsg: '',
        mailStatus: 0,
        forgotSubmitBtn: false,
        internetStatus: 0,
        btn1Disable: false,
        aboutModal: false,
    };

    async componentDidMount() {
        if (navigator.onLine) this.setState({ internetStatus: 1 });
        this.nameInput.focus();
        let data = {
            key: config.key
        };

        //Server Status 
        axios.post(config.curriculaserver + "/curricula/checkstatus", data)
            .then(res => {
                if (res.data.Status === 1) {
                    this.setState({ flags: res.data.flag });
                    localStorage.setItem("flags", JSON.stringify(res.data.flag));
                }
                else if (res.data.Status === 0) {
                    //console.log(res.data.msg)
                }
            })
            .catch(() => {
                this.setState({ serverstatus: 1 });
            });
        if (this.props.common.isAuthenticated === true) this.props.logoutUser();

    }

    internetStatus = (value) => {
        if (value === 1) return <Tag color="success"> Online</Tag>;
        else return <Tag color="volcano">Internet Offline</Tag>;
    }

    showModal = () => {
        this.setState({ visible: true, mailSubmitBtn: true, fUsername: "", fMail: "" });
    };

    handleCancel = () => {
        this.setState({ visible: false, mailMsg: '', loading: false });
    };

    handleChange = e => {
        this.setState({ [e.target.id]: e.target.value });
    };

    handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            this.onClickLoginBtn();
        }
    }

    validateEmail = (email) => {
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    onClickLoginBtn = () => {
        this.setState({ loginBtnLoading: true, btn1Disable: true });

        const { Username1, Password } = this.state;

        if (!Username1 || !Password) {
            message.error('Invalid Entry !');
            this.setState({ loginBtnLoading: false });
        }
        else if (/[^a-zA-Z0-9_]/.test(Username1) || /[^a-zA-Z0-9_]/.test(Password)) {
            message.error('Symbols Not Allowed !');
            this.setState({ Username1: '', Password: '', loginBtnLoading: false });
        }
        else {
            let userData = {
                USER_ID: Username1,
                PASSWORD: Password,
                key: config.key
            };
            message.loading('Action in progress..');
            let interval = setTimeout(() => {
                this.setState({ loginBtnLoading: false, btn1Disable: false });
                message.destroy();
                this.props.loginUser(userData);
            }, 1500);
            return () => clearInterval(interval);
        }
    };

    onClickForgot = async () => {
        const { fUsername, fMail } = this.state;
        if (!fUsername || !fMail) {
            message.error('Invalid Entry !');
            return false;
        }

        if (!this.validateEmail(fMail)) {
            message.error('Invalid Email ID!');
            return false;
        }

        const userData = {
            USER_ID: fUsername,
            MAIL_ID: fMail,
            SEND_MAIL_ID: this.state.flags.SYSTEM_MAIL,
            SEND_MAIL_PASSWORD: this.state.flags.SYSTEM_MAIL_PASSWORD,
            key: config.key
        };

        this.setState({ loading: true, forgotSubmitBtn: true });

        axios
            .post(config.curriculaserver + "/curricula/forgotpassword_mail/", userData)
            .then(async res => {
                this.setState({ mailMsg: res.data.msg, loading: false, mailStatus: res.data.Status, forgotSubmitBtn: false });
            });
    };

    UNSAFE_componentWillReceiveProps(nextProps) {
        if (nextProps.common.isAuthenticated) {
            let validRole = nextProps.common.user.ROLE;
            console.log(validRole)
            if (nextProps.common.user.LOCK) {
                message.info("Account Suspended ! Contact Admin !");
            }
            else if (validRole === 'S') {
                this.props.history.push("/student/home");
            }
            else if (validRole === 'B') {
                this.props.history.push("/batchcoordinator/home");
            }
            else if (validRole === 'A') {
                this.props.history.push("/admin/home");
            }
            else if (validRole === 'TF') {
                this.props.history.push("/faculty/home");
            }
            else if (validRole === 'C') {
                this.props.history.push("/coordinator/home");
            }
            else if (validRole === 'H') {
                this.props.history.push("/hod/home");
            }
            else if (validRole === 'SA') {
                this.props.history.push("/studentaffairs/home");
            }
            else if (validRole === 'R') {
                this.props.history.push("/report/home");
            }
            else if (validRole === 'Z') {
                message.info("Account Suspended ! Contact Admin !");
            }
            else if (validRole === 'CA'){
                this.props.history.push("/ca/home");
            }
            else if (validRole === 'COE') {
                this.props.history.push("/coe/home");
            }
           

        }
        if (nextProps.common.errors.Status === 0) {
            message.error(nextProps.common.errors.msg);
        }
    };


    render() {
        return (
            <>
                { this.state.serverstatus === 0 ?
                    <Card
                        className="login fade-in mt-1"
                        size="default"
                        hoverable
                        title=
                        {
                            <Row>
                                
                                <Col span={ 3 } offset={ 18 } align="end">
                                    <Badge color="red" /><Badge color="yellow" /><Badge color="green" />
                                </Col>
                            </Row>
                        }
                        style={ { width: 350, textAlign: "center" } }
                        cover={
                            <Row justify="center" align="middle">
                                <Col span={ 24 }>
                                    <Carousel dots={ false } autoplay>
                                        <span>
                                        </span>
                                        <span>
                                        </span>
                                    </Carousel>
                                </Col>
                            </Row>
                        }
                        actions={ [
                        ] }
                    >
                      
                        <Row gutter={ [8, 8] } className="padding-2" style={ { marginBottom: "-2%" } } justify="center">
                            <Col span={ 24 }>
                                <Input
                                    onPaste={ (e) => { e.preventDefault(); return false; } }
                                    onCopy={ (e) => { e.preventDefault(); return false; } }
                                    ref={ (input) => { this.nameInput = input; } }
                                    id="Username1" onChange={ this.handleChange } value={ this.state.Username1 }
                                    prefix={ <UserOutlined style={ { color: 'rgba(0,0,0,.25)' } } /> }
                                    placeholder="Username" autoComplete="new-password" onKeyPress={ this.handleKeyPress }
                                />
                            </Col>
                            <Col span={ 24 }>
                                <Input.Password
                                    onPaste={ (e) => { e.preventDefault(); return false; } }
                                    onCopy={ (e) => { e.preventDefault(); return false; } }
                                    disabled={ !this.state.Username1 ? true : false }
                                    id="Password" onChange={ this.handleChange } value={ this.state.Password }
                                    prefix={ <LockOutlined style={ { color: 'rgba(0,0,0,.25)' } } /> }
                                    type="password"
                                    placeholder="Password"
                                    autoComplete="new-password"
                                    onKeyPress={ this.handleKeyPress }
                                />
                            </Col>
                            <Col span={ 24 } className="mt-2">
                                <Button block icon={ <EnterOutlined /> }
                                    disabled={ !this.state.Username1 || !this.state.Password || this.state.btn1Disable ? true : false }
                                    type="primary" loading={ this.state.loginBtnLoading || this.state.btn1Disable } onClick={ this.onClickLoginBtn }>Log in</Button>
                            </Col>
                        </Row>
                    </Card>
                    :
                    <Result
                        style={ { marginTop: "-10%" } }
                        className="loginextra"
                        status="500"
                        title={ config.toolname || "Lab" }
                        subTitle={ config.collegeName + " undergoing a bit of scheduled maintenance !!" }
                        extra={
                            <span>
                                <Row type="flex" justify="center">
                                    <Col span={ 12 }><Tag style={ { width: "100%" } } color={ this.state.serverstatus === 1 ? "red" : "green" }>OFFLINE</Tag></Col>
                                </Row>
                                <br />
                                <Spin size="small" />
                                <br /><br />
                                <Text type="secondary">{ "For support : " + config.supportMailID }</Text>
                            </span>
                        }
                    />
                }


                <Modal
                    destroyOnClose
                    title="Forgot Password"
                    visible={ this.state.visible }
                    onOk={ this.onClickForgot }
                    onCancel={ this.handleCancel }
                    okText="Submit"
                >
                    <Row gutter={ [8, 16] } type="flex" justify="center">

                        <Col xs={ 24 } align="middle"><img alt="example" height="70" src={ require('../../images/password.svg').default } /></Col>

                        <Col xs={ 24 }>
                            Please enter your Username and registered Mail ID. An email will be sent to you with your new password.
                        </Col>
                        <Col xs={ 24 } md={ 12 }>
                            <Input
                                id="fUsername" onChange={ this.handleChange } value={ this.state.fUsername }
                                prefix={ <UserOutlined style={ { color: 'rgba(0,0,0,.25)' } } /> }
                                placeholder="Username" autoComplete="new-password"
                            />
                        </Col>
                        <Col xs={ 24 } md={ 12 }>
                            <Input
                                id="fMail" onChange={ this.handleChange } value={ this.state.fMail }
                                prefix={ <MailOutlined style={ { color: 'rgba(0,0,0,.25)' } } /> }
                                placeholder="Mail ID" autoComplete="new-password"
                            />
                        </Col>
                        <Col span={ 24 } style={ { textAlign: "center" } }>
                            {
                                this.state.loading ?
                                    (<Spin />)
                                    :
                                    this.state.mailMsg ?
                                        (<span style={ { textAlign: "left" } }>
                                            <Alert
                                                message={ this.state.mailStatus === 1 ? 'Success' : 'Failed' }
                                                description={ this.state.mailMsg }
                                                type={ this.state.mailStatus === 1 ? 'success' : 'error' }
                                                showIcon
                                            />
                                        </span>) : ''
                            }
                        </Col>
                    </Row>
                </Modal>
            </>
        )
    }
}

SignIn.propTypes = {
    loginUser: PropTypes.func,
    logoutUser: PropTypes.func,
    common: PropTypes.object
};

const mapStateToProps = state => ({
    common: state.common
});

export default withRouter((connect(mapStateToProps, { loginUser, logoutUser })(SignIn)));