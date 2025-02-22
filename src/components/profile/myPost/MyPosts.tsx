import React from 'react';
import s from './MyPosts.module.css';
import {Post} from '../post/Post';
import {PostsType} from '../../../index';


export type PostsPropsType = {

    posts: PostsType[]
}
export const MyPosts = (props: PostsPropsType) => {


    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>

                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>add post</button>
                </div>

            </div>
            <div className={s.posts}>
                {props.posts.map((p: PostsType) =>
                    <Post key={p.id} message={p.message} likeCount={p.likeCount}/>
                )}

            </div>
        </div>
    );
};
