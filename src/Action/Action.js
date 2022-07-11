import {CANCEL} from '../Types/Types'
import {SHOW} from '../Types/Types'

export const cancelbtn=()=>{
return {
    type:CANCEL
}
}

export const showModal=(x)=>{
    console.log(x)
    return{
        type:SHOW,
        index:x
    }
}