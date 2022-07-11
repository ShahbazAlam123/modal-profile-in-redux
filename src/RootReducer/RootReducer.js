import {ToggleReducer} from '../Reducer/Reducer'
import { combineReducers } from 'redux'

const RootReducer=combineReducers({
    cancel:ToggleReducer
})
export default RootReducer;