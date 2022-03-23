import React, { useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserService from '../../service/UserService';
import classes from './ProfileSettings.module.css'

const ProfileSettings = () => {

    const userInfo = useSelector(state=>state.userAuth.user);
    const dispatch = useDispatch();

    const editInfo = async(userInfo) => {
        let addInfo = {
            name: userInfo.name,
            surname: userInfo.surname,
            id: userInfo.id
        }
        dispatch({type: 'LOGIN_USER', payload: addInfo})
        let response = await UserService.updateUser(addInfo.name, addInfo.surname, addInfo.id)
        console.log(response)
    };

    return (
        <div className={classes.content}>
            <h1 className={classes.h1}>Личные данные</h1>
            <div className={classes.profile}>
                <img src={userInfo.photo} alt="" className={classes.profilePhoto}/>
                <div className={classes.profileText}>
                    <div>{userInfo.name}</div>
                    <div>{userInfo.surname}</div>
                </div>
            </div>
            <div className={classes.infoForm}>
                <div className={classes.anyForm}>
                    <div>
                        Имя
                    </div>
                    <input
                        className={classes.input}
                        type="text" 
                        value={userInfo.name}
                        onChange={(e)=>editInfo({...userInfo, name: e.target.value})}
                    />
                </div>
                <div className={classes.anyForm}>
                    <div>
                        Фамилия
                    </div>
                    <input
                        className={classes.input}
                        type="text" 
                        value={userInfo.surname}
                        onChange={(e)=>editInfo({...userInfo, surname: e.target.value})}
                    />
                </div>
                {/*<div className={classes.anyForm}>
                    <div>
                        Пол
                    </div>
                    {/*<input 
                        className={classes.input}
                        type='hidden' 
                        value={userInfo.name}
                        onChange={(e)=>editInfo({...userInfo, name: e.target.value})}
                    />}
                    <select 
                        className={classes.input}
                        onChange={(e)=>console.log(e.target.value)}
                    >
                        <option value="Мужской">Мужской</option>
                        <option value="Женский">Женский</option>
                    </select>
                </div>
                */}
                <div className={classes.anyForm}>
                    <div>
                        ID
                    </div>
                    <input
                        className={classes.input}
                        type="text" 
                        value={userInfo.id}
                        onChange={(e)=>editInfo({...userInfo, id: e.target.value})}
                    />
                </div>
                <button
                    className={classes.button}
                    onClick={()=>editInfo(userInfo)}
                > 
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default ProfileSettings;