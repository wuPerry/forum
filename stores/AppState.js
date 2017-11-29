import {observable, useStrict, action, computed} from 'mobx';
import {HeaderStore} from './HeaderStore';
import {ProductStore} from './ProductStore';
import {QuestionStore} from './QuestionStore';

useStrict(true);
let store = null

class RootStore {
    constructor (isServer) {
        this.headerStore=new HeaderStore(this);
        this.productStore=new ProductStore(this);
        this.questionStore=new QuestionStore(this);
    }
}

export function initStore (isServer) {
    if (isServer) {
        return new RootStore(isServer);//返回客户端数据
    } else {
        if (store === null) {
            store = new RootStore(isServer)
        }
        return store
    }
}
export const rootStore=new RootStore(0);
