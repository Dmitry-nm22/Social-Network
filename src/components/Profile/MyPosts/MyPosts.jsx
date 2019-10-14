import React from 'react';
import styles from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return  <div className={styles.content}>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={styles.Posts}>
                <Post message = 'hi, how are you'/>
                <Post message ='Its my first post'/>
            </div>
        </div>
    </div>

}

export default MyPosts;