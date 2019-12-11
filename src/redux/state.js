const ADD_POST = "ADD-POST";
const UPDATE_NEW_POST_TEXT = "UPDATE-NEW-POST-TEXT";
const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
const SEND_MESSAGE = "SEND_MESSAGE";


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
        }

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
        if(action.type === ADD_POST){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);

        }else if( action.type === UPDATE_NEW_POST_TEXT){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }else if(action.type === UPDATE_NEW_MESSAGE_BODY){
            this._state.dialogsPage.newMessageBody = action.body;
            this._callSubscriber(this._state);
        }else if(action.type === SEND_MESSAGE){
            debugger
            let body = this._state.dialogsPage.newMessageBody;
            this._state.dialogsPage.newMessageBody = '';
            this._state.dialogsPage.messages.push({id: 5, message: body});
            this._callSubscriber(this._state);
        }
    }
};

export const addPostActionCreator = () =>( {type: ADD_POST}  );
export const updateNewPostTextActionCreator = (text) => (
    {type: UPDATE_NEW_POST_TEXT, newText: text}
)

export const sendMessageCreator = () =>(  {type: SEND_MESSAGE}  );
export const updateNewMessageBodyCreator = (body) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: body }
)


export default store;