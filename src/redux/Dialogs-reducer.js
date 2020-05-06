const SEND_MESSAGE = "SEND_MESSAGE";


let initialState = {

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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case  SEND_MESSAGE:
            let body = action.newMessageBody;
            return {
                ...state,
                messages: [...state.messages, {id: 5, message: body} ]
            };
        default:
            return state;
    }

}

export const sendMessageCreator = (newMessageBody) => ({type: SEND_MESSAGE, newMessageBody});


export default dialogsReducer;