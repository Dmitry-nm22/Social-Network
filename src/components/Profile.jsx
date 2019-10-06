import React from 'react';
import styles from './Profile.module.css';

const Profile = () => {
    return  <div className={styles.content}>
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEVRgcMNTFiSVjmb4_NxD9sIjgCWpkos01luUIk9XVBal-d8l&s" />
        </div>
        <div>
            ava + description
        </div>
        <div>
            My posts
            <div>
                New post
            </div>
            <div className={styles.Posts}>
                <div className={styles.item}>
                    Post 1
                </div>
                <div className={styles.item}>
                    Post 2
                </div>
            </div>
        </div>
    </div>

}

export default Profile;