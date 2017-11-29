import React,{Component} from 'react'
import {Row,Col} from 'antd'
class ProductList extends Component{
    render(){
        return(
            <div className="product-list">
                <Row>
                    <Col lg={18}>
                        {Object.keys(this.props.lists).map((list,index)=>
                            (<div key={index} className="list-wrapper"><h2>{list}</h2>
                                {Object.keys(this.props.lists[list]).map((item,index)=>
                                    (<div key={index} className="list">
                                        <h5>{item}</h5>
                                        <Row style={{marginTop:'12px'}}>
                                            {Object.keys(this.props.lists[list][item]).map((i,idx)=>
                                                <Col span={7} key={idx} style={{backgroundColor:'#fff',margin:'0 3% 24px 0'}}>
                                                    <img src={this.props.lists[list][item][i].src} />
                                                    <div className="info">
                                                        <h6>{i}</h6>
                                                        <ul>
                                                            <li>{this.props.lists[list][item][i].view}</li>
                                                            <li>{this.props.lists[list][item][i].lastReply}</li>
                                                        </ul>
                                                    </div>
                                                </Col>
                                            )}
                                        </Row>
                                    </div>)
                                )}
                            </div>)
                        )
                        }
                    </Col>
                    <Col lg={6}></Col>
                </Row>
            </div>
        )
    }
}
export default ProductList;