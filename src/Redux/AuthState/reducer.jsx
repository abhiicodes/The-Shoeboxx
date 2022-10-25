import { LOGIN, SIGNUP } from './actions';
const initState = {status:true,token:"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImNAYS5jb20iLCJfaWQiOiI2MzUyODMyNmQwZDY5MDc1NmYxZjc4YjUiLCJpYXQiOjE2NjY2Nzg4MDd9.xSUSk6Fr9hkjpZ6ST9hzVH1FV5DN00NfwX7yI57y6_4",user_id:"1"}

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

