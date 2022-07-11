import {CANCEL, SHOW} from '../Types/Types'
import {Mock} from '../components/Mock'
const initialState={
    Mock:Mock,
    val:'',
    isShow:false
}

export const ToggleReducer=(state=initialState,action)=>{
   
    if(action.type===CANCEL){
        return{   
            ...state,
            isShow:false
        }
     }
    else if(action.type===SHOW){
        return{   
            ...state,
            isShow:true,
            val:action.index
        }
     }
     else{
        return {...state};
    }
   
}