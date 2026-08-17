// src/redux/store.js
import { createStore,combineReducers ,applyMiddleware  } from 'redux';
import {thunk} from 'redux-thunk';
import counterReducer from './reducer';

const rootReducer =  combineReducers({
    userName:()=> "Rathish",
    age:()=>22,
    id:()=>"TY1968EFDC"
},counterReducer)


const store = createStore(rootReducer,applyMiddleware(thunk));

export default store;