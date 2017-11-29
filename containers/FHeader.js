/**
 * Created by admin on 2017/11/21.
 */
import React,{Component} from 'react'
import Link from 'next/link'
import { inject, observer } from 'mobx-react'
import { Layout,Menu,Icon,Row,Col,Input } from 'antd'
import NavList from '../components/NavList'
const { Header, Content, Footer, Sider } = Layout;
const Search = Input.Search;

@inject('store') @observer
class FHeader extends Component{
    constructor(){
        super();
    }
    render(){
        return(
            <div className="header">
                <div className="logo-login">
                    <div className="container">
                        <Row>
                            <Col span={4}>
                                <a className="logo" href="/">logo</a>
                            </Col>
                            <Col lg={20}>
                                <ul className="login-register">
                                    <li><Icon type="user" style={{ fontSize: '18px', color: '#fff',marginRight:'8px'}} /><Link prefetch href="/login"><a>Login</a></Link></li>
                                    <li><Icon type="solution" style={{ fontSize: '18px', color: '#fff',marginRight:'8px'}} /><Link prefetch href="/"><a>register</a></Link></li>
                                </ul>
                            </Col>
                        </Row>
                    </div>
                </div>
                <div className="nav-list">
                    <div className="container">
                        <Row>
                            <Col span={20}>
                                <NavList />
                            </Col>
                            <Col span={4}>
                                <Search placeholder="Search All"  style={{ width: 200 }} onSearch={value => console.log(value)} />
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
        )
    }
}
export default FHeader;
