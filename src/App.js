import React, { Component } from 'react';
import LoginForm from './Components/LoginForm';
import './App.css';

class App extends Component {
  render() {
    return (
      <LoginForm onFormSubmit={this.handleFormSubmission} />


    );
  }
}

export default App;
