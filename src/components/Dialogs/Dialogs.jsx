import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/message";




const Dialogs = (props) => {

    let messagesElements = props.state.messages.map( m => <Message message={m.message} />)
    let dialogsElements = props.state.dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
        </div>
    )
}


export default Dialogs;