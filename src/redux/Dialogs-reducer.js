const UPDATE_NEW_MESSAGE_BODY = "UPDATE_NEW_MESSAGE_BODY";
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

    newMessageBody: ""

}

const dialogsReducer = (state = initialState, action) => {

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY:
            state.newMessageBody = action.body;
            return state;
        case  SEND_MESSAGE:
            let body = state.newMessageBody;
            state.newMessageBody = '';
            state.messages.push({id: 5, message: body});
            return state;
        default:
            return state;
    }

}

export const sendMessageCreator = () => ({type: SEND_MESSAGE});
export const updateNewMessageBodyCreator = (body) => (
    {type: UPDATE_NEW_MESSAGE_BODY, body: body}
)

export default dialogsReducer;