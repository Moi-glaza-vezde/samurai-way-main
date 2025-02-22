import s from './../Dialogs.module.css';
import React from 'react';

export type MessagePropsType = {
    id: number
    message: string,
}
export const Message = ({message}: MessagePropsType) => {

    return <div className={s.message}>{message}</div>
}