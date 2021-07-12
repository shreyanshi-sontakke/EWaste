import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { FaRecycle } from 'react-icons/fa';
import { RiHomeLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import { IoCallOutline } from 'react-icons/io5';
import { IoIosInformationCircleOutline } from 'react-icons/io';
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

            <Link className="menu-item" to="/about">
                <BsPerson className="menu-logo"/> About
            </Link>

            <Link className="menu-item" to="/contact">
                <IoCallOutline className="menu-logo"/> Contact
            </Link>

            <Link className="menu-item" href="/information">
                <IoIosInformationCircleOutline className="menu-logo"/> Information
            </Link>
        </Menu>
    );
}


//The old navbar
// function Nav() {
//     return (
//         <div className="Page">
//             <body id="body-pd">
//                 <div className="container">
//                     <header className="header" id="header">
//                         <div className="header_toggle"> <i className='bx bx-menu' id="header-toggle"></i> </div>
//                     </header>
//                     <div className="l-navbar" id="nav-bar">
//                         <nav className="nav">
//                             <div>
//                                 <a href="#" className="nav_logo"><i class='bx bx-recycle nav_icon'></i><span className="nav_logo-name">Green Bird</span>
//                                 </a>
//                                 <div className="nav_list">
//                                     <a href="home.html" className="nav_link active"> <i className='bx bx-home-circle nav_icon'></i> <span
//                                         className="nav_name">Home</span> </a>
//                                     <a href="about.html" className="nav_link"> <i className='bx bx-user nav_icon'></i> <span
//                                         className="nav_name">About</span> </a>
//                                     <a href="contact.html" className="nav_link"> <i className='bx bx-message-square-detail nav_icon'></i>
//                                         <span className="nav_name">Contact</span> </a>
//                                     <a href="information.html" className="nav_link"> <i className='bx bxs-info-square bx-flip-horizontal bx-tada nav_icon'></i> <span
//                                         className="nav_name">Information</span> </a>
//                                 </div>
//                                 <a href="#" class="nav_link"> <i className='bx bx-message-rounded-detail english_nav_icon'></i> <span
//                                     className="english_nav_name">English</span> </a>
//                             </div>
//                         </nav>
//                     </div>
//                 </div>
//             </body>
//         </div>
//     );
// }
// export default Nav;