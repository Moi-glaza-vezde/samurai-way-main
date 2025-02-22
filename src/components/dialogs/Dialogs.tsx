import React from 'react';
import s from './Dialogs.module.css';
import {DialogItem, DialogItemPropsType} from './dialogItem/DialogItem';
import {Message, MessagePropsType} from './message/Message';
import {DialogItemType, MessageType} from '../../index';

type DialogsPropsType={
    dialogs:DialogItemType[]
    messages:MessageType[]

}



export const Dialogs = (props:DialogsPropsType) => {


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {props.dialogs.map((d: DialogItemPropsType) => {
                    return (
                        <DialogItem key={d.id} name={d.name} id={d.id}/>
                    )
                })}
            </div>
            <div className={s.messages}>
                {props.messages.map((m: MessagePropsType) => {
                    return (
                        <Message key={m.id} message={m.message} id={1}/>
                    )
                })}

            </div>
        </div>)
};
