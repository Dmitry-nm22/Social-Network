import React from 'react';
import styles from './ProfileInfo.module.css';


const ProfileInfo = () => {
    return <div>
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEVRgcMNTFiSVjmb4_NxD9sIjgCWpkos01luUIk9XVBal-d8l&s"/>
        </div>
        <div className={styles.description_block}>
            ava + description
        </div>
    </div>

}

export default ProfileInfo;