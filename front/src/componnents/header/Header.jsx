import React, { useRef } from 'react';
import "./Header.css";
import { Button } from 'primereact/button';
import { Menu } from 'primereact/menu';
import { Toast } from 'primereact/toast';
import { useTranslation } from "react-i18next";
import { useNavigate } from 'react-router-dom';
import { handleLogout } from '../logout/handleLogout';

const Header = () => {
    const navigate = useNavigate();
    const menu = useRef(null);
    const toast = useRef(null);
    const { t, i18n } = useTranslation();

    let items = [
        { label: t('profile'), icon: 'pi pi-user', command: () =>{
            navigate('/profile');
        }},
        { label: t('logout'), icon: 'pi pi-sign-out', command: () => {handleLogout()} }
    ];


    return (
        <>
            <Toast ref={toast}></Toast>
            <Menu model={items} popup ref={menu} id="popup_menu_left" />
            <Button icon="pi pi-bars" className="mr-2" onClick={(event) => menu.current.toggle(event)} aria-controls="popup_menu" aria-haspopup />
        </>
    )
}

export default Header;