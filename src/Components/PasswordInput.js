import React from 'react';
const PasswordInput = (props) => {
    
    const onPasswordChange = (event) => {
        var password = event.target.value;

        //this is lifting the state value to the parent
        this.props.onPasswordInputChange(password);
    };




        return (
            <div className="form-group">
                
                <label htmlFor="exampleInputPassword1">Password:  </label>
                <input 
                    aria-describedby="passwordHelp"
                    className="form-control"
                    id="exampleInputPassword1"
                    onChange={onPasswordChange}
                    placeholder="Enter Password"
                    type="password"
                    value={this.state.email}    />

            </div>
        );
    };


export default PasswordInput;