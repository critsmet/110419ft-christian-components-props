import React from 'react'

class Student extends React.Component{

  render(){
    console.log(this.props);
    return(
    <p>Name: {this.props.name}</p>
    )
  }
}

export default Student
