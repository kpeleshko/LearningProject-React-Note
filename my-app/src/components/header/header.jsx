import React from 'react';
import s from './header.module.sass';

function Header() {
  return (
    <header className={ s.header }>
        <h1 className={ s.header__title }>Collect your thoughts...</h1>
    </header>
  );
}

export default Header;
