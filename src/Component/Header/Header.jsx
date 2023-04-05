import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav>
            <Link to="/">home</Link>
            <Link to="/friends">Friends</Link>
            <Link to="/posts">posts</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
        </nav>
    );
};

export default Header;