import React,{Component} from 'react'
import FHeader from '../containers/FHeader'
import FFooter from '../containers/FFooter'
import NormalLoginForm from '../containers/NormalLoginForm'
import {AppState,rootStore} from '../stores/AppState';
import {observer,Provider} from 'mobx-react';
import {Form} from 'antd'

const LoginForm = Form.create()(NormalLoginForm);

export default class Index extends Component {
    render(){
        return(
            <Provider store={rootStore}>
                <div className="page-wrapper">
                    <FHeader />
                    <LoginForm />
                    <FFooter/>
                </div>
            </Provider>
        )
    }
}