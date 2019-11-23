import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/message";






let dialogs = [
    {id : 1, name: 'Angelina'},
    {id : 2, name: 'Sasha'},
    {id : 3, name: 'Andrey'},
    {id : 4, name: 'Kolya'}
]
let messages = [
    {id : 1, message: 'hi'},
    {id : 2, message: 'hoy'},
    {id : 3, message: 'hey'},
    {id : 4, message: 'fertt'}
]


let messagesElements = messages.map( m =><Message message={m.message} />)
let dialogsElements = dialogs.map( d => <DialogItem name={d.name} id={d.id}/>)


const Dialogs = () => {
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