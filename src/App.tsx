import React from 'react';
import './App.css';
import {Header} from './components/header/Header';
import {NavBar} from './components/navBar/NavBar';
import {Profile} from './components/profile/Profile';
import {Dialogs} from './components/dialogs/Dialogs';
import {BrowserRouter, Route} from 'react-router-dom';
import {Music} from './components/music/Music';
import {News} from './components/news/News';
import {Setting} from './components/setting/Setting';
import {DialogItemType, MessageType, PostsType} from './index';

type AppPropsType = {
    dialogs: DialogItemType[]
    messages: MessageType[]
    posts: PostsType[]
}


const App = (props: AppPropsType) => {
    return (
        <BrowserRouter>
            <div className="app-wrapper">
                <Header/>
                <NavBar/>
                <div className="app-wrapper-content ">
                    <Route
                        path={'/dialogs'}
                        render={() =>
                            <Dialogs
                                dialogs={props.dialogs}
                                messages={props.messages}
                            />
                        }
                    />
                    <Route path={'/profile'} render={() => <Profile posts={props.posts}/>}/>
                    <Route path={'/music'} render={() => <Music/>}/>
                    <Route path={'/news'} render={() => <News/>}/>
                    <Route path={'/setting'} render={() => <Setting/>}/>
                </div>

            </div>
        </BrowserRouter>
    )
        ;
};

export default App;
