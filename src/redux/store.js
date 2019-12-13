import profileReducer from "./Profile-reducer";
import dialogsReducer from "./Dialogs-reducer";
import sidebarReducer from "./Sidebar-reducer";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: 'hi, how are you', likesCount: 12},
                {id: 2, message: 'Its my first post', likesCount: 11},
                {id: 2, message: 'blablabla', likesCount: 13},
                {id: 2, message: 'hey yo', likesCount: 11}
            ],
            newPostText: 'blablabla'

        },
        dialogsPage: {
            messages: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'hoy'},
                {id: 3, message: 'hey'},
                {id: 4, message: 'fertt'}
            ],

            dialogs: [
                {id: 1, name: 'Angelina'},
                {id: 2, name: 'Sasha'},
                {id: 3, name: 'Andrey'},
                {id: 4, name: 'Kolya'}
            ],

            newMessageBody: ""
        },
        sidebar: {}

    },
    _callSubscriber() {
        console.log('state is changed')
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action)
        this._state.sidebar = sidebarReducer(this._state.sidebar, action)

        this._callSubscriber(this._state);
    }
};






export default store;