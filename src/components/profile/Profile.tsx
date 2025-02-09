import React from 'react';
import s from './Profile.module.css';
import {MyPosts} from './myPost/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';

export const Profile = () => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
};
