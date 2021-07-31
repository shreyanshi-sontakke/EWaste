import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FaRecycle } from 'react-icons/fa';
import { RiHomeLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';
import { IoIosInformationCircleOutline } from 'react-icons/io';
import { IoBookSharp } from 'react-icons/io5'
import { Link } from 'react-router-dom';

export default props => {
    return (
        <Menu>
            <Link className="menu-item" to="/">
                <FaRecycle className="menu-logo"/> GreenBird
            </Link>

            <Link className="menu-item" to="/">
                <RiHomeLine className="menu-logo"/> Home
            </Link>

            <Link className="menu-item" to="/cities">
                <RiHomeLine className="menu-logo"/> Cities Covered
            </Link>

            <Link className="menu-item" to="/about">
                <BsPerson className="menu-logo"/> About
            </Link>

            <Link className="menu-item" to="/contact">
                <IoCallOutline className="menu-logo"/>
                Contact 
            </Link>

            <Link className="menu-item" to="/JoinUs">
                <IoIosInformationCircleOutline className="menu-logo"/> Join us!
            </Link>

            <Link className="menu-item" to="/blog">
                <IoBookSharp className="menu-logo"/> GreenBird Blog
            </Link>
        </Menu>
    );
}


