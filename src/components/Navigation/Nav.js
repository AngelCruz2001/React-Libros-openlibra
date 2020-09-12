import React from 'react';
import {Link,Router,NavLink} from 'react-router-dom';

export const Nav = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor:'#299BB5'}}>
            <Link className="navbar-brand" to="/Home">JPG-Libros</Link>
            
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <NavLink activeClassName="active" className="nav-link " to="/Home">Home<span className="sr-only">(current)</span></NavLink>
                    <NavLink activeClassName="active" className="nav-link" to="/Search">Search</NavLink>
                    <NavLink activeClassName="active" className="nav-link" to="/Book">Book</NavLink>
                </div>
            </div>
        </nav>
    );
}


