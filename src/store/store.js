import {applyMiddleware, createStore} from 'redux';
import { combineReducers } from 'redux';
import { userInfo } from './userInfo';
import { userList } from './userList';
import { userAuth } from './userAuth';
import { posts } from './posts';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import {post} from "./post";
import {usersList} from "./usersList";

const rootReducers = combineReducers({
    userInfo: userInfo,
    userList: userList,
    usersList: usersList,
    userAuth: userAuth,
    post: post,
    posts: posts,
})

export const store = createStore(rootReducers, composeWithDevTools(applyMiddleware(thunk)));