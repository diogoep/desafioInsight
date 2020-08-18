import React, { Component } from 'react';
import ListCoursesComponent from './ListCoursesComponent';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import CourseComponent from './CourseComponent';
import UserComponent from './UserComponent';
import ListUsersComponent from './ListUsersComponent';
import AddUserComponent from './AddUserComponent';
import LoginComponent from './LoginComponent';
import LogoutComponent from './LogoutComponent';
import MenuComponent from './MenuComponent';
import AuthenticatedRoute from './AuthenticatedRoute';
class InstructorApp extends Component {
    render() {
        return (
            <Router>
                <>
                <MenuComponent style={{width:"100%"}}/>
                <div className="col s12 m6" style={{margin: "auto", width: "50%", padding: "10px"}}>
                    <div className="card horizontal">
                        <div className="card-content black-text">
                    <h1>Users/Activities Application</h1>
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" exact component={LoginComponent} />
                        <AuthenticatedRoute path="/logout" exact component={LogoutComponent} />
                        <AuthenticatedRoute path="/courses" exact component={ListCoursesComponent} />
                        <AuthenticatedRoute path="/courses/:id/addUser/:idUser" exact component={AddUserComponent} />
                        <AuthenticatedRoute path="/courses/:id/addUser" exact component={AddUserComponent} />
                        <AuthenticatedRoute path="/users" exact component={ListUsersComponent} />
                        <AuthenticatedRoute path="/user" exact component={UserComponent} />
                        <AuthenticatedRoute path="/users/:id" exact component={UserComponent} />
                        <AuthenticatedRoute path="/courses" exact component={ListCoursesComponent} />
                        <AuthenticatedRoute path="/courses/:id" component={CourseComponent} />
                    </Switch>
                    </div>
                    </div>
                    </div>
                </>
            </Router>
        )
    }
}

export default InstructorApp