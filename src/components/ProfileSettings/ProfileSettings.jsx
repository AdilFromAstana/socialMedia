import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserService from '../../service/UserService';
import classes from './ProfileSettings.module.css'

const ProfileSettings = () => {

    const [active, setActive] = useState(false);

    const user = useSelector(state=>state.userAuth.user);
    const dispatch = useDispatch();

    const editInfo = async(user) => {
        try {
            let addInfo = {
                name: user.name,
                surname: user.surname,
                id: user.id,
                img: user.img,
            }
            dispatch({type: 'LOGIN_USER', payload: addInfo})
            await UserService.updateUser(addInfo.name, addInfo.surname, addInfo.id, addInfo.img)
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
                    src={`http://localhost:5000/${user.img}`} 
                    alt='Ваша аватарка'
                    className={classes.profilePhoto}
                />
                <div className={!active ? classes.unModal : classes.modal}>
                    <label 
                        className={classes.modalButton}
                        htmlFor='files'
                    >
                        Изменить аватарку
                        <input 
                            style={{display: 'none'}}
                            id='files'
                            type="file"
                            onChange={(e)=>editInfo({...user, img: e.target.files[0]})}
                        />
                    </label>
                    <p className={classes.modalButton}>Удалить аватарку</p>
                </div>
                <div className={classes.profileText}>
                    <div>{user.name}</div>
                    <div>{user.surname}</div>
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
                        value={user.name}
                        onChange={(e)=>editInfo({...user, name: e.target.value})}
                    />
                </div>
                <div className={classes.anyForm}>
                    <div>
                        Фамилия
                    </div>
                    <input
                        className={classes.input}
                        type="text" 
                        value={user.surname}
                        onChange={(e)=>editInfo({...user, surname: e.target.value})}
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
                        value={user.id}
                        onChange={(e)=>editInfo({...user, id: e.target.value})}
                    />
                </div>
                <button
                    className={classes.button}
                    onClick={()=>editInfo(user)}
                > 
                    Сохранить
                </button>
            </div>
        </div>
    );
};

export default ProfileSettings;