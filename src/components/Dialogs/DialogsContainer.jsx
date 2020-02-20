import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";


let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage,
        isAuth: state.auth.isAuth
    }
};
let mapDispatchTooProps = (dispatch) =>{
    return {
        updateNewMessageBody : (body) => {
            dispatch(updateNewMessageBodyCreator(body))
        },
        sendMessage : () => {
            dispatch(sendMessageCreator())
        }
    }
};


//HOC
let AuthRedirectComponent = withAuthRedirect(Dialogs)


const DialogsContainer = connect(mapStateToProps, mapDispatchTooProps) (AuthRedirectComponent);


export default DialogsContainer;