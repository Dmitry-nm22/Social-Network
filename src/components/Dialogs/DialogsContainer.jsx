import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage
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

const DialogsContainer = connect(mapStateToProps, mapDispatchTooProps) (Dialogs);


export default DialogsContainer;