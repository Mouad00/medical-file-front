import {type Action } from "./Action"
import { type ApiState } from "../../utils/Api";


const initialState : ApiState = {
    data:null,
    loading:false,
    error:null
}

function reducer(state : ApiState, action: Action){
    switch(action.type){
        case 'GET_LIST_VISITS':
            return {...state,loading:true};
        case 'GET_LIST_VISITS' + 'SUCCESS':
            return {...state, data: action.payload, loading:false}
        case 'GET_LIST_VISITS' + 'ERROR':
            return {...state, data: action.payload, loading:false}
        default:
            throw new Error('uncought error of action');
    }
}

export {initialState, reducer as PatientReducer }


