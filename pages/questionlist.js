import React,{Component} from 'react'
import FHeader from '../containers/FHeader'
import FFooter from '../containers/FFooter'
import Questions from '../containers/Questions'
import {AppState,rootStore} from '../stores/AppState';
import {observer,Provider} from 'mobx-react';

export default class Index extends Component {
    render(){
        return(
            <Provider store={rootStore}>
                <div className="page-wrapper" style={{backgroundColor:"#fff"}}>
                    <FHeader />
                    <Questions />
                    <FFooter/>
                </div>
            </Provider>
        )
    }
}