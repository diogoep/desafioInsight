import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import AuthenticationService from '../service/AuthenticationService';

class MenuComponent extends Component {

    render() {
        const isUserLoggedIn = AuthenticationService.isUserLoggedIn();

        return (
            <header>
                <nav className="navbar navbar-expand-md navbar-dark bg-primary">
                    <ul className="navbar-nav" style={{color: "white"}}>
                        <li><Link className="nav-link" style={{color: "white"}} to="/courses">Activities/Courses</Link></li>
                        <li><Link className="nav-link" style={{color: "white"}} to="/users">Users</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" style={{color: "white"}} to="/login">Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" style={{color: "white"}} to="/logout" onClick={AuthenticationService.logout}>Logout</Link></li>}
                    </ul>
                </nav>
            </header>
        )
    }
}

export default withRouter(MenuComponent)