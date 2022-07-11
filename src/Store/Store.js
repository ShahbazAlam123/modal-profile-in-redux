import  RootReducer  from "../RootReducer/RootReducer";
import { createStore} from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";

const store=createStore(RootReducer,devToolsEnhancer({trace:true}));

export default store;