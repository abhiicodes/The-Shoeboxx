import { LOGIN } from './actions';
const initState = {status:true,token:null}

export const authReducer = (state=initState,{type,payload})=>{
    // console.log(type,payload)
    switch (type) {
        case LOGIN:
            return {...state,status:true,token:payload}
            
    
        default: return state
           
    }
}

