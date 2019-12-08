let state = {
    profilePage: {
        posts: [
            {id: 1, message: 'hi, how are you', likesCount: 12},
            {id: 2, message: 'Its my first post', likesCount: 11},
            {id: 2, message: 'blablabla', likesCount: 13},
            {id: 2, message: 'hey yo', likesCount: 11}
        ]

    },
    dialogsPage: {
        messages: [
            {id: 1, message: 'hi'},
            {id: 2, message: 'hoy'},
            {id: 3, message: 'hey'},
            {id: 4, message: 'fertt'}
        ],

        dialogs: [
            {id : 1, name: 'Angelina'},
            {id : 2, name: 'Sasha'},
            {id : 3, name: 'Andrey'},
            {id : 4, name: 'Kolya'}
        ]
    }

}


export  let addPost = (postMessage) =>{
    let newPost = {
        id: 5,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
}

export default state;