import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from 'react-router-dom';

type DialogItemPropsType = {
    id: string,
    name: string,
}
const DialogItem = ({name, id}: DialogItemPropsType) => {
    let path = `/dialogs/${id}`;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>

    )

}

type MessagePropsType = {
    message: string,
}
const Message = ({message}: MessagePropsType) => {


    return <div className={s.message}>{message}</div>
}

export const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>

                <DialogItem name={'Dimych'} id={'1'}/>
                <DialogItem name={'Andrey'} id={'2'}/>
                <DialogItem name={'Sveta'} id={'3'}/>
                <DialogItem name={'Sasha'} id={'4'}/>
                <DialogItem name={'Victor'} id={'5'}/>
                <DialogItem name={'Valera'} id={'6'}/>

            </div>
            <div className={s.messages}>

                <Message message={'Hi'}/>
                <Message message={'How are you?'}/>
                <Message message={'Yo'}/>

            </div>
        </div>)
};
