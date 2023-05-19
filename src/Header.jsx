import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <header>
            <section className="logo">
            <h1>Funeraria Mortuary</h1>
            </section>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/productos">Productos</Link>
                    </li>
                    <li>
                        <Link to="/planes">Planes</Link>
                    </li>
                </ul>
            </nav>
      </header>
    );
};

export default Header;