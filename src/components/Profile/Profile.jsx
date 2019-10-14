import React from 'react';
import styles from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div>
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEVRgcMNTFiSVjmb4_NxD9sIjgCWpkos01luUIk9XVBal-d8l&s"/>
        </div>
        <div>
            ava + description
        </div>
        <MyPosts/>
    </div>

}

export default Profile;