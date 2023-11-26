import data from '../../Data.json'
export const initialState={
    arr:data.product,
    name:""


}
export const reducer=(state,action)=>{
    if(action.type==="updatearr")
    {
        return{...state,arr:action.payload}
    }
    // else if(action.type==="updatearr"){
    //     return{...state,arr:action.payload}
    // }
    // else if(action.type==="updatearr"){
    //     return{...state,arr:action.payload}
    // }
    // else if(action.type==="updatearr"){
    //     return{...state,arr:action.payload}
    // }
     if(action.type==="updatename"){
        return{...state,name:action.payload}
    }


}