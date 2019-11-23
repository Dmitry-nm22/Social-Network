import React from 'react';
import styles from './Post.module.css';

const Post = (props) => {
    return <div className={styles.item}>
        <img src='https://klike.net/uploads/posts/2019-03/medium/1551512888_2.jpg'/>
        {props.message}
        <div>
            <span>like {props.likesCount}</span>
        </div>

    </div>
}

export default Post;