import {applyMiddleware, combineReducers, createStore} from "redux";
import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";
import UsersReducer from "./Users-reducer";
import authReducer from "./auth-reducer";
import  thunkMiddleWare from "redux-thunk";
import {reducer as formReducer} from "redux-form"

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: UsersReducer,
    auth: authReducer,
    form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleWare));


export default store;