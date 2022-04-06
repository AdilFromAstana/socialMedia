import React, {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'
import PageContent from './components/PageContent/PageContent';
import axios from "axios";
import {API_URL} from "./http";
import {useDispatch} from "react-redux";

const App = () => {

    const dispatch = useDispatch();

    const navigate = useNavigate();

    const checkAuth = async () => {
        dispatch({type: 'LOGIN_LOADING', payload: true})
        try {
            let response = await axios.get(`${API_URL}/refresh`, {withCredentials: true});
            localStorage.setItem('token', response.data.accessToken);
            dispatch({type: 'LOGIN_AUTH', payload: true});
            dispatch({type: 'LOGIN_USER', payload: response.data.user});
            navigate('/main')
        } catch (e) {
            console.log(e.response);
        } finally {
            dispatch({type: 'LOGIN_LOADING', payload: false})
        }
    }

    useEffect(()=>{
        checkAuth()
    }, [])

  return (
      <div>
         <PageContent/>
      </div>
  );
};



export default App;