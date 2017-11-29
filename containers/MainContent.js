import React,{Component} from 'react'
import { inject, observer } from 'mobx-react'
import {Row,Col} from 'antd'
import ProductList from '../components/ProductList'

@inject('store') @observer
class MainContent extends Component{
    render(){
        return(
            <div className="main-wrapper">
                <div className="container">
                    <Row>
                        <Col lg={20}>
                            <div className="welcome-box">
                                {/*{this.props.store.infos.text}*/}
                            </div>
                        </Col>
                    </Row>
                    <ProductList lists={this.props.store.productStore.productList} />
                </div>
            </div>
        )
    }
}
export default MainContent;