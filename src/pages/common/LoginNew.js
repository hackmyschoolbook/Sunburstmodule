import React from 'react';
import { Layout, Card, PageHeader, Typography, Row, Col, Image, Button, Modal, Carousel, message, Avatar, notification } from 'antd';
import Image1 from '../../images/story-tel.svg'
import Finger from '../../images/finger.svg'
import Login from './Login1'
import config from "../../config";
import { MailOutlined, ArrowRightOutlined } from '@ant-design/icons';
import CollegeLogo from '../../images/college/logo.png'
import axios from "axios";
const { Content } = Layout;
const { Text, Title } = Typography;
const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#0070CB',
};

class App extends React.Component {

    state = {
        loginModal: false,
        loginInfo: {}
    }

    componentDidMount() {
        this.detec();
    }

    detec = async () => {
        let a;
        if (navigator.userAgent.match(/Android/i)
            || navigator.userAgent.match(/webOS/i)
            || navigator.userAgent.match(/iPhone/i)
            || navigator.userAgent.match(/iPad/i)
            || navigator.userAgent.match(/iPod/i)
            || navigator.userAgent.match(/BlackBerry/i)
            || navigator.userAgent.match(/Windows Phone/i)) {
            a = true;
        } else {
            a = false;
        }

        if (a) {
            notification.open({
                message: 'Mobile Device Detected',
                description:
                    'Open the website in chrome browser. Tap on the menu options in the top right side and select the checkbox against the Desktop site.',
                duration: 10,
            });
        }
        else {
            if (!!window.chrome === false) message.warning("This browser is not fully supported yet, For best results please use Chrome.", 10);
            else message.success("Google Chrome browser v95+ is fully supported.");
        }
        const res = await axios.get('https://geolocation-db.com/json/'); this.setState({ loginInfo: res.data });
        message.info('Your IP Address ' + res.data.IPv4 + " Logged !");
    }

    render() {
        let { loginModal } = this.state;
        let toolname = config.toolname + " " + config.totalYear;

        return (
            <Layout>
                <Layout className="site-layout mainpage">

                  

                    <Content
                        className="site-layout-background"
                        style={ {
                            margin: '200px 700px 16px',
                            padding: 24,
                            minHeight: 280,
                        } }
                    >
                        <Button className='ant-btn-primary' size="large" onClick={ () => { this.setState({ loginModal: true }) } }>Login</Button>

                    </Content>


                    <Modal className="courseView" visible={ loginModal } footer={ null } closable={ false }
                        bodyStyle={ { textAlign: "center" } } destroyOnClose
                        onCancel={ () => { this.setState({ loginModal: false }) } }
                    >
                        <Row justify="center" align="middle" gutter={ [16, 16] }>
                            <Col span={ 24 } align="middle">
                                <Login />
                            </Col>
                        </Row>
                    </Modal>
                </Layout>
            </Layout >
        );
    }
}

export default App;
