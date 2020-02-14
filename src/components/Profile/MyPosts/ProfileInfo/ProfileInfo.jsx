import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";




const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return <div>
        <div>
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlEVRgcMNTFiSVjmb4_NxD9sIjgCWpkos01luUIk9XVBal-d8l&s"/>
        </div>
        <div className={styles.description_block}>

            <img src={props.profile.photos.large} alt=""/>
            ava + description
        </div>
    </div>

}

export default ProfileInfo;
