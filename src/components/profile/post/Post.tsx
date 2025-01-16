import React from 'react';
import s from './Post.module.css';
type PostPropsType = {
   message: string;
};
export const Post = (props: PostPropsType) => {
   return (
      <div className={s.item}>
         <img
            src="https://masterpiecer-images.s3.yandex.net/55a0f9ed9fcd11ee837dd659965eed18:upscaled"
            alt=""
         />
         {props.message}
         <div>
            <span>like</span>
         </div>
      </div>
   );
};
