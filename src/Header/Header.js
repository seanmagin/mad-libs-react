import React from 'react';
import './Header.css';

const Header = (props) => {
    return(
        <div className="Header">
            <div className="Container">
                <h1>{props.appName}</h1>
                </div>
        </div>
    )
}

export default Header;