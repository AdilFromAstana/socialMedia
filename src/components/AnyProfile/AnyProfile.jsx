import React, {useEffect, useState} from 'react';
import classes from "./AnyProfile.module.css";
import AnyProfileRight from "./AnyProfileRight/AnyProfileRight";
import AnyProfileLeft from "./AnyProfileLeft/AnyProfileLeft";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../../http/fetchOneDevice";
import Modal from '../Modal/Modal';

const AnyProfile = () => {

    const [modal, setModal] = useState(false)

    const [anyUser, setAnyUser] = useState({info: [], isLoading: true});

    const {id} = useParams();

    useEffect(() => {
        fetchOneDevice(id).then(data=>setAnyUser(data))
    }, []);

    if(anyUser.isLoading){
        return (
            <div>Загрузка...</div>
        )
    }

    return (
        <div className={classes.content}>
            <AnyProfileLeft anyUser={anyUser} modal={modal} setModal={setModal}/>
            <AnyProfileRight anyUser={anyUser} id={id} modal={modal} setModal={setModal}/>
            <Modal modal={modal} setModal={setModal}/>
        </div>
    );
};

export default AnyProfile;