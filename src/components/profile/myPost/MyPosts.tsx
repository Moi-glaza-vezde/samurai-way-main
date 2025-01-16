import React from 'react';
import s from './MyPosts.module.css';
import { Post } from '../post/Post';

export const MyPosts = () => {
   return (
      <div>
         My posts
         <div>New posts</div>
         <div className={s.posts}>
            <Post message={'Hi, how are you'} />
            <Post message={'its my first post'} />
         </div>
      </div>
   );
};
