import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogsItem";
import Message from "./Message/Message";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../Common/FormsControl/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";



const Dialogs = (props) => {
    let state = props.dialogsPage
    let messagesElements = state.messages.map( m => {
        return <Message message={m.message} key={m.id} />
    })
    let dialogsElements = state.dialogs.map( d => <DialogItem name={d.name} key={d.id} id={d.id}/>)
    let newMessageBody = state.newMessageBody;



    let addNewMessage = (values) =>{
        props.sendMessage(values.newMessageBody);
    }


    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                <div>{messagesElements}</div>
            </div>
            <AddMessageReduxForm onSubmit={addNewMessage}/>
        </div>
    )
}
//вынести в компонент dialog-addmessageform папку
let MaxLenght50 = maxLengthCreator(50)
const AddMessageForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='newMessageBody' placeholder='Enter your message' validate={[required,MaxLenght50]}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}

const AddMessageReduxForm = reduxForm ({form: 'dialogAddMessageForm'}) (AddMessageForm)


export default Dialogs;