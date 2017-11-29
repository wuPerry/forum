import React,{Component} from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import { Row,Col,Menu,Dropdown,Icon} from 'antd'
import Question from '../components/Question'

const menu = (
    <Menu>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">1st menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.taobao.com/">2nd menu item</a>
        </Menu.Item>
        <Menu.Item>
            <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">3rd menu item</a>
        </Menu.Item>
    </Menu>
);

@inject('store') @observer
export default class Questions extends Component{
    render(){
        return(
            <div className="question-list">
                <div className="title">
                    <div className="container">
                        <Row>
                            <Col span={20}>
                                <ul>
                                    <li>TP-LINK Forum Rules</li>
                                    <li>tplink ‎(Administrator)</li>
                                </ul>
                            </Col>
                            <Col style={{textAlign:"right"}} span={4}>09-09-2012<br />Views: 11,882</Col>
                        </Row>
                    </div>
                </div>
                <div className="list">
                    <div className="container">
                        <div className="container">
                            <Row className="row-head">
                                <Col span={4}>Title / Thread Starter</Col>
                                <Col span={13} style={{textAlign:"right"}}>Replies / Views</Col>
                                <Col span={6} style={{textAlign:"right"}}>
                                    <Dropdown overlay={menu}>
                                        <a className="ant-dropdown-link" href="#">
                                            Hover me <Icon type="down" />
                                        </a>
                                    </Dropdown>
                                </Col>
                            </Row>
                            <Question questions={this.props.store.questionStore.questions}/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}