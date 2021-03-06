import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";




const Navbar = (props) => {

    return (
        <div className={s.navbar}>
            <nav className={s.nav}>

                <div className={s.item}>
                    <NavLink to="/news" activeClassName={s.active}> Новости</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/music" activeClassName={s.active}>Музыка</NavLink>
                </div>
                <div className={s.item}>
                    <NavLink to="/settings" activeClassName={s.active}> Настройки</NavLink>
                </div>

            </nav>
        </div>
    );
}

export default Navbar;