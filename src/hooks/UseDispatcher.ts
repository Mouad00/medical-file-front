import { useCallback, useReducer } from "react";
import Api, {type ApiState} from '../utils/Api';

export const useDispatcher = (reducer : any , initialState: any) => {
    const [state, dispatch] = useReducer <(state : any, dispatch : any) => any>(reducer,initialState);

    const get = useCallback((action: any) => {
        dispatch({type:action.type});
        return new Promise((resolve,reject) => {
            Api.get<ApiState['data']>(action.url)
            .then((response :any) => {
                dispatch({type:action.type + '_SUCCESS', payload :response.data});
                resolve(response.data);
            })
            .catch((error:any) => {
                dispatch({type:action.type + 'ERROR', payload :error});
                reject(error);
            });
        });
    },[]);

    const post = useCallback((action: any) => {
        return new Promise((resolve,reject) => {
            Api.post<ApiState['data']>(action.url,action.payload)
            .then((response:any) => {
                dispatch({type:action.type + '_SUCCESS', payload :response.data});
                resolve(response.data);
            })
            .catch((error:any) => {
                dispatch({type:action.type + 'ERROR', payload :error});
                reject(error);
            });
        });
    },[]);

    const put = useCallback((action: any) => {
        return new Promise((resolve,reject) => {
            Api.put<ApiState['data']>(action.url,action.payload)
            .then((response:any) => {
                dispatch({type:action.type + '_SUCCESS', payload :response.data});
                resolve(response.data);
            })
            .catch((error:any) => {
                dispatch({type:action.type + 'ERROR', payload :error});
                reject(error);
            });
        });
    },[]);

    const del = useCallback((action: any) => {
        return new Promise((resolve,reject) => {
            Api.delete<ApiState['data']>(action.url)
            .then((response:any) => {
                dispatch({type:action.type + '_SUCCESS', payload :response.data, id: action.id});
                resolve(response);
            })
            .catch((error:any) => {
                dispatch({type:action.type + 'ERROR', payload :error});
                reject(error);
            });
        });
    },[]);

    return {
        state,
        get,
        post,
        put,
        del
    }
}