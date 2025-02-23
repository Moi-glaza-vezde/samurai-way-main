import React, {LegacyRef, MouseEvent, RefObject} from 'react';
import s from './MyPosts.module.css';
import {Post} from '../post/Post';
import {PostsType} from '../../../index';


export type PostsPropsType = {

    posts: PostsType[]
}
export const MyPosts = (props: PostsPropsType) => {
    const newPostElement:LegacyRef<HTMLTextAreaElement> = React.createRef();
    const addPost = (e:MouseEvent<HTMLButtonElement>) => {

        if (newPostElement.current) {
            const text = newPostElement.current.value;
            alert(text);
        }


}


    return (
        <div className={s.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea ref={newPostElement}></textarea>
                </div>
                <div>
                    <button onClick={addPost}>add post</button>
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
