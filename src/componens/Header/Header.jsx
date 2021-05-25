import React from 'react';
import css from './Header.module.css';

const Header = () => {
    return (
        <header className={css.header}>
        <div className={css.header__logo}></div>
        <div className={css.header__shoppingCart}></div>
        <button className={css.header__btn_hamburger}></button>
      </header>
    )
}

export default Header;