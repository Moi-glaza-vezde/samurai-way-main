import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {state} from './redux/state';

export type DialogItemType = {
    id: number,
    name: string,
}
const dialogs: DialogItemType[] = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}
]


export type MessageType={
    id: number
    message: string,

}
const messages: MessageType[] = [
    {id: 1, message: 'Hi'},
    {id: 2, message: 'How are you?'},
    {id: 3, message: 'Yo'},
    {id: 4, message: 'yo'},
    {id: 5, message: 'yo'},
    {id: 6, message: 'yo'}
]


export type PostsType = {
    id: number,
    message: string,
    likeCount: number,
}


const posts: PostsType[] = [
    {id: 1, message: 'Hi, how are you', likeCount: 12},
    {id: 2, message: 'its my first post', likeCount: 10},
    {id: 3, message: 'bla bla', likeCount: 6},
    {id: 4, message: 'its my da da', likeCount: 3},
]
ReactDOM.render(
    <App state={state}/>,
    document.getElementById('root')
);