import React from 'react';
import styles from './ProfileInfo.module.css';
import Preloader from "../../../Common/Preloader/Preloader";
import ProfileStatus from "./ProfileStatus";




const ProfileInfo = (props) => {
    if(!props.profile){
        return <Preloader/>
    }
    return <div>
        <div className={styles.description_block}>
            <img src={props.profile.photos.large} alt=""/>
            <ProfileStatus status={props.status} updateStatus={props.updateStatus}/>
        </div>
    </div>

}

export default ProfileInfo;
