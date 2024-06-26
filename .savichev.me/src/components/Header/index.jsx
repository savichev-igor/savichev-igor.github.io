import React from 'react';
import {Link} from 'react-router-dom';

import './index.css';

const Header = () => {
    return (
        <nav className="navbar navbar-default">
            <div className="container-fluid">
                <div className="navbar-header">
                    <button
                        type="button"
                        className="navbar-toggle collapsed"
                        data-toggle="collapse" data-target="#navbar"
                        aria-expanded="false" aria-controls="navbar"
                    >
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                    <Link to="/" className="navbar-brand">
                        <img src={require('./images/logo.webp')} className="navbar-brand__image" alt="logo"/>
                    </Link>
                </div>
                <div id="navbar" className="navbar-collapse collapse">
                    <ul className="nav navbar-nav">
                        <li><Link to="/about">Обо мне</Link></li>
                        <li><Link to="/skills">Навыки</Link></li>
                        <li><Link to="/blog">Блог</Link></li>
                        <li><Link to="/contacts">Контакты</Link></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Header;
