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
            ]
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
        if(action.type === "ADD-POST"){
            let newPost = {
                id: 5,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = ''
            this._callSubscriber(this._state);

        }else if( action.type === "UPDATE-NEW-POST-TEXT"){
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }
}


export default store;