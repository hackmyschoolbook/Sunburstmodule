import React, { Component } from 'react'
import { Descriptions, Spin } from 'antd';
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class Faq extends Component {

    state = {
        loading: false, open: false,
    }

    componentDidMount() {
    }

    render() {
        return (

            <Spin spinning={this.state.loading}>
                <Descriptions
                    bordered
                    column={{ sm: 1, md: 2, lg: 2, xs: 1 }}
                    size="middle"
                    className="justify">

                    <Descriptions.Item label="Category" span={2}>
                        Information
                    </Descriptions.Item>

                </Descriptions>
            </Spin>
        )
    }
}

const mapStateToProps = state => ({
    common: state.common
});
export default withRouter(connect(mapStateToProps, {})(Faq));