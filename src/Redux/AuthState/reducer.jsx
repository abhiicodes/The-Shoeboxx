import { LOGIN, SIGNUP } from './actions';
const initState = {status:true,token:null,user_id:"1"}

export const authReducer = (state=initState,{type,payload})=>{
    // console.log(type,payload)
    switch (type) {
        case LOGIN:
            return {...state,status:true,token:payload}
           case SIGNUP:
            return {...state,user_id:payload} 
    
        default: return state
           
    }
}

