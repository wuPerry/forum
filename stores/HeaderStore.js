import {observable,action,runInAction} from 'mobx'
import 'isomorphic-fetch'

export class HeaderStore{
    @observable navLists=[];
    constructor(rootStore){
        this.rootStore=rootStore;
        this.loadNavs();
    }
    @action async loadNavs(){
        const res = await fetch('http://localhost:3001/navLists');
        const json = await res.json();
        runInAction(()=>{
            this.navLists=json;
        })
    }
}
