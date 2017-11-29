import React,{Component} from 'react'
import { inject, observer } from 'mobx-react'
import {Row, Col,Icon} from 'antd'


class QuestionList extends Component{
    render(){
        return(
            <Col span={24} style={{padding:"25px",borderBottom:"1px solid #979797"}}>
                <Row>
                    <Col span={18}>
                        <Row>
                            <Col span={2}>
                                <Icon style={{fontSize:"30px"}} type="mail" />
                            </Col>
                            <Col span={17}>
                                <ul>
                                    <li>{this.props.question.text}</li>
                                    <li>{this.props.question.time}</li>
                                </ul>
                            </Col>
                            <Col span={5} style={{float:"right"}}>
                                <ul className="inline-block">
                                    <li><Icon style={{fontSize:"20px"}} type="tag-o" /></li>
                                    <li><Icon style={{fontSize:"20px"}} type="paper-clip" /></li>
                                    <li>Replies:{this.props.question.replay}<br />Views:{this.props.question.view}</li>
                                </ul>
                            </Col>
                        </Row>
                    </Col>
                    <Col span={6} style={{textAlign:"right"}}>
                        <ul className='inline-block'>
                            <li style={{textAlign:"left"}}>maverickccs<br />{this.props.question.time}</li>
                            <li><Icon style={{fontSize:"20px"}} type="right-circle" /></li>
                        </ul>
                    </Col>
                </Row>
            </Col>
        )
    }
}
export default QuestionList;