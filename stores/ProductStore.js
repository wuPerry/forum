import {observable,action,computed,runInAction } from 'mobx'
import 'isomorphic-fetch'

export class ProductStore{
    @observable productList={};
    constructor(rootStore){
        this.rootStore=rootStore;
        this.loadLists();
    }
    @action async loadLists(){
        const res = await fetch('http://localhost:3001/productList');
        const json = await res.json();
        runInAction(()=>{
            this.productList=json;
        })
    }
}