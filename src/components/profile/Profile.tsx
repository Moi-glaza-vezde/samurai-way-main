import React from 'react';
import s from './Profile.module.css';
import {MyPosts, } from './myPost/MyPosts';
import {ProfileInfo} from './profileInfo/ProfileInfo';
import {PostsType} from '../../index';


type ProfilePropsType = {

    posts:PostsType[]

}



export const Profile = (props:ProfilePropsType) => {
    return (
        <div className={s.content}>
            <ProfileInfo/>
            <MyPosts posts={props.posts} />
        </div>
    );
};
