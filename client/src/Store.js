import {legacy_createStore as createStore, combineReducers, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {composeWithDevTools} from "redux-devtools-extension";
import { userLoginReducer, userRegisterReducer, userUpdateReducer } from "./reducers/userReducers";
import { messageCreateReducer, messageDeleteReducer, messageListReducer, messageUpdateReducer } from "./reducers/messageReducer";

const reducer = combineReducers({
    userLogin: userLoginReducer,
    userRegister : userRegisterReducer,
    messageList : messageListReducer,
    messageCreate : messageCreateReducer,
    messageUpdate : messageUpdateReducer,
    messageDelete : messageDeleteReducer,
    userUpdate : userUpdateReducer
});

const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {userLogin: { userInfo: userInfoFromStorage },};

const middleware = [thunk];

const store =  createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware(...middleware))
   
)

export default store