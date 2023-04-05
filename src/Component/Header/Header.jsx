import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
    return (
        <nav>
            <ActiveLink to="/">home</ActiveLink>
            <ActiveLink to="/friends">Friends</ActiveLink>
            <ActiveLink to="/posts">posts</ActiveLink>
            <ActiveLink to="/about">about</ActiveLink>
            <ActiveLink to="/contact">contact</ActiveLink>
        </nav>
    );
};

export default Header;