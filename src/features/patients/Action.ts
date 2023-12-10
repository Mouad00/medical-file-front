interface Action {
    type: 'GET_LIST_VISITS'
    payload?:any;
    url?:any;
    id?:any;
}


export const getListVisits = ():Action => ({
    type:'GET_LIST_VISITS',
    url:`/patient/listvisits`
})


export type {Action}