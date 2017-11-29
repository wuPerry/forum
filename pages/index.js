import React,{Component} from 'react'
import FHeader from '../containers/FHeader'
import FFooter from '../containers/FFooter'
import MainContent from '../containers/MainContent'
import {initStore,rootStore} from '../stores/AppState'
import {action} from 'mobx';
import {observer,Provider} from 'mobx-react';


export default class Index extends Component {
    render(){
        return(
            <Provider store={rootStore}>
            <div className="page-wrapper">
                <FHeader />
                <MainContent />
                <FFooter/>
            </div>
            </Provider>
        )
    }
}