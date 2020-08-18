import React, { Component } from 'react'
import CourseDataService from '../service/CourseDataService';

class AddUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            users: [],
            usersNotOnCourse: [],
            message: null
        }
        this.deleteUserClicked = this.deleteUserClicked.bind(this)
        this.addUserClicked = this.addUserClicked.bind(this)
        this.refreshUsers = this.refreshUsers.bind(this)
    }

    componentDidMount() {
        this.refreshUsers();
    }

    refreshUsers() {
        CourseDataService.retrieveAllUsers(this.props.match.params.id)
            .then(
                response => {
                    this.setState({ users: response.data })
                }
            )

        CourseDataService.retrieveUsersNotOnCourse(this.props.match.params.id)
            .then(
                response => {
                    this.setState({ usersNotOnCourse: response.data })
                }
            )
    }

    deleteUserClicked(idUser) {
        CourseDataService.deleteUser(this.props.match.params.id, idUser)
            .then(
                response => {
                    this.setState({ message: `Delete of user ${idUser} Successful` })
                    this.refreshUsers()
                }
            )

    }

    addUserClicked(idUser) {
        CourseDataService.addUser(this.props.match.params.id, idUser).then(
            response => {
                this.setState({message: `User ${idUser} has been successfully added`})
                this.refreshUsers()
            }
        )
    }


    render() {
        //console.log('render')

        return (
            
            <div className="container">
                <h3>Users of Activity {this.props.match.params.id} </h3>
                {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
                <div className="container">
                    <table className="table">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Nome</th>
                                <th>Add</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.users.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.nome}</td>
                                            <td></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteUserClicked(user.id)}>Delete</button></td>
                                        </tr>
                                )
                            }
                                                        {
                                this.state.usersNotOnCourse.map(
                                    user =>
                                        <tr key={user.id}>
                                            <td>{user.id}</td>
                                            <td>{user.nome}</td>
                                            <td><button className="btn btn-success" onClick={() => this.addUserClicked(user.id)}>Add</button></td>
                                            <td></td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}


export default AddUserComponent