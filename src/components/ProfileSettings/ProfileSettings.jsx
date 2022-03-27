import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserService from '../../service/UserService';
import classes from './ProfileSettings.module.css'

const ProfileSettings = () => {

    const [active, setActive] = useState(false);

    const userInfo = useSelector(state=>state.userAuth.user);
    const dispatch = useDispatch();

    const editInfo = async(userInfo) => {
        try {
            let addInfo = {
                name: userInfo.name,
                surname: userInfo.surname,
                id: userInfo.id,
                img: userInfo.img,
            }
            dispatch({type: 'LOGIN_USER', payload: addInfo})
            let response = await UserService.updateUser(addInfo.name, addInfo.surname, addInfo.id, addInfo.img)
        } catch (error) {
            console.log(error)
        }
    };

    return (
        <div className={classes.content}>
            <h1 className={classes.h1}>Личные данные</h1>
            <div className={classes.profile}>
                <img
                    onClick={()=>setActive(!active)}
                    src={userInfo.photo} 
                    alt='Ваша аватарка'
                    className={classes.profilePhoto}
                />
                <div className={active ? classes.unModal : classes.modal}>
                    <label 
                        className={classes.modalButton}
                        htmlFor='files'
                    >
                        Изменить аватарку
                        <input 
                            style={{display: 'none'}}
                            id='files'
                            type="file"
                            onChange={(e)=>editInfo({...userInfo, img: e.target.files[0]})}
                        />
                    </label>
                    <p className={classes.modalButton}>Удалить аватарку</p>
                </div>
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