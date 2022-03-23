import React, {useEffect, useState} from 'react';
import classes from "./AnyProfile.module.css";
import AnyProfileRight from "./AnyProfileRight/AnyProfileRight";
import AnyProfileLeft from "./AnyProfileLeft/AnyProfileLeft";
import {useParams} from "react-router-dom";
import {fetchOneDevice} from "../../http/fetchOneDevice";

const AnyProfile = () => {

    const [user, setUser] = useState({info: []});

    const {id} = useParams();

    useEffect(() => {
        fetchOneDevice(id).then(data=>setUser(data))
    }, []);

    return (
        <div className={classes.content}>
            <AnyProfileLeft/>
            <AnyProfileRight user={user} id={id} />
        </div>
    );
};

export default AnyProfile;