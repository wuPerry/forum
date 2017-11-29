import {observable,action,runInAction} from 'mobx'
import 'isomorphic-fetch'

export class QuestionStore{
    @observable questions=[];
    constructor(rootStore){
        this.rootStore=rootStore;
        this.load();
    }
    @action async load(){
        const res = await fetch('http://localhost:3001/questions');
        const json = await res.json();
        runInAction(()=>{
            this.questions=json;
        })
    }
}
