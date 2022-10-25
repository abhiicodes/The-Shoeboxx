import { LOGIN, SIGNUP } from './actions';
const initState = {status:true,name:"A",token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFAYS5jb20iLCJfaWQiOiI2MzU3OWY4YzIyN2Q4YzI5OGNjNzI4YWUiLCJpYXQiOjE2NjY2ODY4ODR9.yVohHyJkPcHda_tc8P1F5Zz45DdbKDE3Rt8vwZyXDHQ",user_id:"1"}

export const authReducer = (state=initState,{type,payload})=>{
    // console.log(type,payload)
    switch (type) {
        case LOGIN:
            return {...state,status:true,token:payload.token,name:payload.name}
           case SIGNUP:
            return {...state,user_id:payload} 
    
        default: return state
           
    }
}

