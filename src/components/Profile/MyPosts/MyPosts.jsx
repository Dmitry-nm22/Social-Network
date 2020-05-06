import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";
import {Field, reduxForm} from "redux-form";

const MyPosts = (props) => {

    let postsElements = props.posts.map(p =><Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();

     let onAddPost = (values) =>{
        props.addPost(values.newPostText);
    }



    return <div className={styles.postsBlock}>
        <h3>My posts</h3>
        <AddNewPostFormRedux onSubmit={onAddPost}/>
        <div className={styles.posts}>
            {postsElements}
        </div>

    </div>

}

let AddNewPostForm = (props) =>{
    return(
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field  name='newPostText' component='textarea' />
            </div>
            <div>
                <button>add Post</button>
            </div>
        </form>
    )
}
let AddNewPostFormRedux = reduxForm ({form: 'profileAddNewPostForm'}) (AddNewPostForm)

export default MyPosts;