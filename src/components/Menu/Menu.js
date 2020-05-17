import React from 'react';
import { Route, Link } from 'react-router-dom';

function Menu() {

    const menus = [
        {
            name: 'Home',
            path: '/',
            exact: true
        },
        {
            name: 'Product Manager',
            path: '/productlist',
            exact: true
        },
    ];

    const showMenuLink = (menus) => {
        let result = null;
        if( menus.length > 0 ) {
            result = menus.map( (menu, index) => {
                return <MenuLink key={index} name={menu.name} path={menu.path} activeOnlyWhenExact={menu.exact} />
            } );
        }
        return result;
    };

    const MenuLink = ({ name, path, activeOnlyWhenExact }) => {
        return (
            <Route path={path} exact={activeOnlyWhenExact}>
                { ({ match }) => {
                    let active = match ? 'active' : '';
                    return (
                        <li className={active}>
                            <Link to={path}>
                                {name}
                            </Link>
                        </li>
                    );
                } }
            </Route>
        );
    };

    return (
        <div className="navbar navbar-default">
            <a className="navbar-brand" >CALL API</a>
            <ul className="nav navbar-nav">
                { showMenuLink(menus) }
            </ul>
        </div>
    );
}

export default Menu;
