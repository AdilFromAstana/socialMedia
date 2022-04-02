import React, {useEffect, useState} from 'react';
import classes from "./AnyProfile.module.css";
import AnyProfileRight from "./AnyProfileRight/AnyProfileRight";
import AnyProfileLeft from "./AnyProfileLeft/AnyProfileLeft";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../../http/fetchOneDevice";

const AnyProfile = () => {

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
            <AnyProfileLeft anyUser={anyUser}/>
            <AnyProfileRight anyUser={anyUser} id={id} />
        </div>
    );
};

export default AnyProfile;