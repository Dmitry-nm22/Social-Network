import React from 'react';
import styles from './users.module.css';

let Users = (props) => {
    if(props.users.length === 0) {
        props.setUsers([
            {
                id: 1,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
                followed: false,
                fullName: 'Dmitry',
                status: 'I a boss',
                location: {city: 'Minsk', country: 'Belarus'}
            },
            {
                id: 2,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
                followed: false,
                fullName: 'Shanya',
                status: 'YOYOYO',
                location: {city: 'Bobruisk', country: 'Belarus'}
            },
            {
                id: 3,
                photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/88/Dmitry_Nagiev_2017_4.jpg',
                followed: false,
                fullName: 'Kolya',
                status: 'iii',
                location: {city: 'Grodno', country: 'Belarus'}
            }
        ])
    }
    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <span>
                    <div>
                        <img src={u.photoUrl} className={styles.userPhoto}/>
                    </div>
                    <div>
                        {u.followed
                            ? <button onClick = {()=>{props.unfollow(u.id)} }> Unfollow </button>
                            : <button onClick = {()=>{props.follow(u.id)} }>Follow</button>}

                    </div>
                </span>
                <span>
                    <span>
                        <div>{u.fullName}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{u.location.country}</div>
                        <div>{u.location.city}</div>
                    </span>
                </span>
            </div>)
        }
    </div>
}

export default Users;