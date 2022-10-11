import React from 'react';
import { Link } from 'react-router-dom'


function getClassName(itemName){
    return window.location.pathname === itemName ? 'nav-item active' : 'nav-item';
}

function SideBarItem(props){
    return(
        <li className={getClassName(props.to)} onClick={props.onClick}>
            <Link to={props.to} className="nav-link d-flex align-items-center">
                {props.children}
                <span className="mt-1 ms-1 sidebar-text">{props.text}</span>
            </Link>
        </li>
    )
}
export default SideBarItem;