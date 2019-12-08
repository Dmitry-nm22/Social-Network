import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {



    let postsElements = props.posts.map(p =><Post message={p.message} likesCount={p.likesCount}/>)
    let newPostElement = React.createRef();

     let addPost = () =>{
        let text = newPostElement.current.value;
        props.addPost(text)
    }

    return <div className={styles.postsBlock}>
        <h3>My posts</h3>
        <div>
            <div>
                <textarea ref={newPostElement}></textarea>
            </div>
            <div>
                <button onClick={addPost}>add Post</button>
            </div>
        </div>
        <div className={styles.posts}>
            {postsElements}
        </div>

    </div>

}

export default MyPosts;