import React, { Component} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import UserDataService from '../service/UserDataService';
import Select from 'react-select'
//import PhoneInput from 'react-phone-number-input'

//const INSTRUCTOR = 'in28minutes'

class UserComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            nome: '',
            endereco: '',
            email: '',
            telefone: '',
            password:'',
            papeis: []
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
       // this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount() {

        // eslint-disable-next-line
        if (this.state.id == -1) {
            return
        }

        UserDataService.retrieveUser(this.state.id)
            .then(response => this.setState({
                nome: response.data.nome,
                endereco: response.data.endereco,
                email: response.data.email,
                telefone: response.data.telefone,
                password: response.data.password
            }))
    }

    validate(values) {
        let errors = {}
        if (!values.nome) {
            errors.nome = 'Enter a name'
        }
        if (!values.endereco) {
            errors.endereco = 'Enter a address'
        }
        if (!values.email) {
            errors.email = 'Enter a email'
        }
        if (!values.telefone) {
            errors.telefone = 'Enter a phone number'
        }
        if (!values.password) {
            errors.password = 'Enter a email'
        }

        return errors

    } 
    /*
    handleChange(event) {
        this.setState({papeis: event.target.papeis});
    }*/

    onSubmit(values) {
        //console.log(papeis);
        
        let user = {
            id: this.state.id,
            nome: values.nome,
            endereco : values.endereco,
            email: values.email,
            telefone: values.telefone,
            password: values.password,
            papeis:[],
            targetDate: values.targetDate
        }
        
        user.papeis.push(this.role.value);
        console.log(user.papeis);
        // eslint-disable-next-line
        if (this.state.id == -1) {
            UserDataService.createUser(user)
                .then(() => this.props.history.push('/users'))
        } else {
            UserDataService.updateUser(this.state.id, user)
                .then(() => this.props.history.push('/users'))
        }

    }
    
    render() {
        const roles = [{ value: 'ADMIN', label: 'Administrador'}, {value: "ESTUDANTE", label: "Estudante"}] 
        //const [selectedValue, setSelectedValue] = roles;
        var handleChange = e => {
            this.role=e;
            console.log(this.role);
            //setSelectedValue(e.value);
            return e.value;
          }
          
        let { id, nome, endereco, email, telefone, password, papeis } = this.state

        return (
            <div>
                <h3>User</h3>
                <div className="container">
                    <Formik
                        initialValues={{ id, nome, endereco, email, telefone, password, papeis }}
                        onSubmit={this.onSubmit}
                        validateOnChange={false}
                        validateOnBlur={false}
                        validate={this.validate}
                        enableReinitialize={true}
                    >
                        {
                            (props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Id</label>
                                        <Field className="form-control" type="text" name="id" disabled />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="nome" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Password</label>
                                        <Field className="form-control" type="text" name="password" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Role</label>
                                        <Select options={roles} 
                                            value={roles.find(obj => obj.value)} // set selected value// set list of the data
                                            onChange={handleChange}/>
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Address</label>
                                        <Field className="form-control" type="text" name="endereco" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Email</label>
                                        <Field className="form-control" type="email" name="email" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Phone Number</label>
                                        <Field className="form-control" type="tel" name="telefone" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
            </div>
        )
    }
}

export default UserComponent