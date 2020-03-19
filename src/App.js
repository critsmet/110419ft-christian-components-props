import React from 'react';
import logo from './logo.svg';
import './App.css';

import Student from './Student'

class App extends React.Component{

  state = {
    students: ["Christian", "Chris", "Maggie"],
    name: ""
  }

  renderStudents(){
    return this.state.students.map(student => <Student name={student}/>)
  }

  handleInput = (event) => {
    let input = event.target.value
    this.setState({name: input}, () => console.log(this.state))
  }

  handleSubmit = (event) => {
    this.setState(prevState => {
      return {
        students: [...prevState.students, prevState.name],
        name: ""
      }
    })
  }

  render(){
    return (
      <div className="App">
        <div id="student-form">
          <input onChange={this.handleInput} placeholder="Enter Student Name" value={this.state.name}/>
          <button onClick={this.handleSubmit}>Make New Student</button>
        </div>
        <div id="students-container">
          <h1>Students:</h1>
          {this.renderStudents()}
        </div>
      </div>
    );
  }
}

export default App;
