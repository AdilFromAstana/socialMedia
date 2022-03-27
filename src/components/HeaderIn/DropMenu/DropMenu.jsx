import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './DropMenu.css'
import DropModal from './DropModal/DropModal';

const DropMenu = ({active}) => {

    const [modal, setModal] = useState(true);

    return (
        <div className={active ? "menuDownActive" : "menuDown"}>
            <Link to='/profileSettings' className='menuSettings'>Личные данные</Link>
            <button className='menuOut' onClick={()=>setModal(!modal)}>Выйти</button>
            <DropModal modal={modal} setModal={setModal}/>
        </div>
    );
};

export default DropMenu;