import React,{Component} from 'react'
import {post} from '../utils/request'
import Router from 'next/router'
import {Form,Input, Icon,Checkbox,Button } from 'antd'
const FormItem = Form.Item;

export default class NormalLoginForm extends Component{
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
                post('http://localhost:3001/login',values).then((res)=>{
                    if(res){
                        Router.push("/");
                    }else{
                        alert('false')
                    }
                })
            }
        });
    }
    render(){
        const { getFieldDecorator } = this.props.form;
        return(
            <div className="login-box">
                <div className="container">
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <FormItem>
                            {getFieldDecorator('userName', {
                                rules: [{ required: true, message: 'Please input your username!' }],
                            })(
                                <Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('password', {
                                rules: [{ required: true, message: 'Please input your Password!' }],
                            })(
                                <Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
                            )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('remember', {
                                valuePropName: 'checked',
                                initialValue: true,
                            })(
                                <Checkbox>Remember me</Checkbox>
                            )}
                            <a className="login-form-forgot" href="">Forgot password</a>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                Login
                            </Button>
                            Or <a href="">register now!</a>
                        </FormItem>
                    </Form>
                </div>
            </div>
        )
    }
}