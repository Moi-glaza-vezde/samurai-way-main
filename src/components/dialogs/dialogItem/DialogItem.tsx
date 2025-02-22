import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';
import React from 'react';

export type DialogItemPropsType = {
    id: number,
    name: string,
}
export const DialogItem = ({name, id}: DialogItemPropsType) => {
    let path = `/dialogs/${id}`;
    return (
        <div className={`${s.dialog} ${s.active}`}>
            <NavLink to={path}>{name}</NavLink>
        </div>

    )

}