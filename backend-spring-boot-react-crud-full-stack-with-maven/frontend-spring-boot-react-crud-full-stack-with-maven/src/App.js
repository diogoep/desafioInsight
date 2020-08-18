import React, { Component } from 'react';
import './App.css';
import InstructorApp from './component/InstructorApp';

class App extends Component {
  render() {
    return (
        <div className="container" style={{padding:"0px", maxWidth:"100%"}}>
          <InstructorApp />
        </div>
    );
  }
}

export default App;
