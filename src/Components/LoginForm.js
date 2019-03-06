import React, { Component } from 'react';
import EmailInput from './EmailInput';
import PasswordInput from './PasswordInput';

class LoginForm extends Component {

    //constructor
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
            results: '',
        }

        this.onEmailChange = this.onEmailChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);

    }

    //handler for data from child component
    onEmailChange(email){
        

        this.setState( () => {
                return {
                    email
                };
            }
        );

    }

    onPasswordChange(password){
    
        this.setState( () => {
                return {
                    password
                };
            }
        );
    }

    


    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <form onSubmit={this.onFormSubmit}>
                    <EmailInput onEmailInputChange={this.onEmailChange} />
                    <PasswordInput onPasswordChange={this.onPasswordChange} />
                    <button type="submit" 
                            className="btn btn-primary">Submit</button>
                </form>
            </div>            
        );
    };
}

export default LoginForm;