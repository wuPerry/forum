import React,{Component} from 'react'
import { inject, observer } from 'mobx-react'
import {Row, Col,Icon} from 'antd'
import QuestionList from '../components/QuestionList'


class Question extends Component{
    render(){
        return(
            <Row>
                {this.props.questions.map((question,idx)=><QuestionList question={question} key={idx}/>)}
            </Row>
        )
    }
}
export default Question;