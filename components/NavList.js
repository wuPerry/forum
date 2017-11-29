import React,{Component} from 'react'
import { inject, observer } from 'mobx-react'
import {Menu} from 'antd'

@inject('store') @observer
class NavList extends Component{
    render(){
        return(
            <Menu id="nav" mode="horizontal" style={{fontSize:'16px'}}>
                {this.props.store.headerStore.navLists.map((nav,index)=><Menu.Item key={index}><a href={nav.href}>{nav.text}</a></Menu.Item>)}
            </Menu>
        )
    }
}
export default NavList;