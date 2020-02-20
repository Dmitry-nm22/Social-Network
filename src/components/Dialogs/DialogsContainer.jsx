import React from 'react';
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/Dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/WithAuthRedirect";
import {compose} from "redux";


let mapStateToProps = (state) =>{
    return {
        dialogsPage: state.dialogsPage,
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
export default compose(
    connect(mapStateToProps, mapDispatchTooProps),
    withAuthRedirect
)(Dialogs);