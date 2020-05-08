import React from 'react'
import {Field, reduxForm} from "redux-form";
import {Input} from "../Common/FormsControl/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";

const LoginForm = (props) =>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  placeholder={'email'} component={Input} name={'email'} validate={[required]}/>
            </div>
            <div>
                <Field  placeholder={'password'} component={Input} name={'password'} validate={[required]} type='password'/>
            </div>
            <div>
                <Field  type={'checkbox'} component={Input} name={'rememberMe'} /> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const ReduxLoginForm =reduxForm({form: 'login'})(LoginForm)

const Login = (props) =>{

    const onSubmit =(formData) =>{
        props.login(formData.email, formData.password, formData.rememberMe)
    }

    if(props.isAuth){
        return <Redirect to={'/profile'}/>
    }

    return <div>
        <h1>Login</h1>
        <ReduxLoginForm onSubmit={onSubmit}/>
    </div>
}

const mapStateToProps = (state) =>({
    isAuth: state.auth.isAuth
})

export default connect (mapStateToProps, {login, }) (Login);