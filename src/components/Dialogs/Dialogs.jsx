import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/message";
import {sendMessageCreator, updateNewMessageBodyCreator} from "../../redux/state";




const Dialogs = (props) => {
    let state = props.store.getState().dialogsPage

    let messagesElements = state.messages.map( m => {
        debugger
        return <Message message={m.message} />
    })


    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)
    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () =>{
        props.store.dispatch(sendMessageCreator())
    }

    let onNewMessageChange = (e) =>{
        let body = e.target.value
        props.store.dispatch(updateNewMessageBodyCreator(body))
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea placeholder='Enter your message'
                                  value={newMessageBody}
                                  onChange={onNewMessageChange}
                        >
                        </textarea>
                    </div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Dialogs;