import React from 'react';
import s from './NavBar.module.css';
export const NavBar = () => {
   return (
      <nav className={s.nav}>
         <ul>
            <li className={s.item}>
               <a href="#">Profile</a>
            </li>
            <li className={s.item}>
               <a href="#">Messages</a>
            </li>
            <li className={s.item}>
               <a href="#">News</a>
            </li>
            <li className={s.item}>
               <a href="#">Music</a>
            </li>
            <li className={s.item}>
               <a href="#">Setting</a>
            </li>
         </ul>
      </nav>
   );
};
