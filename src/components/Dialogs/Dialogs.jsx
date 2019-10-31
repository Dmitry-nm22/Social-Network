import React from 'react';
import style from './Dialogs.module.css';

const Dialogs = () => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                <div className={style.dialog + ' ' + style.active}>
                    Angelina
                </div>
                <div className={style.dialog}>
                    Sasha
                </div>
                <div className={style.dialog}>
                    Denis
                </div>
                <div className={style.dialog}>
                    Ilya
                </div>

            </div>
            <div className={style.messages}>
                <div className={style.message}>hi</div>
                <div className={style.message}>yo</div>
                <div className={style.message}>qu</div>
            </div>
        </div>
    )
}


export default Dialogs;