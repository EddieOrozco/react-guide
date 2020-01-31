import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js'

class App extends Component {
  state = {
    persons: [
      {
        name: 'Eddie', age: 28
      },
      {
        name: 'Josh', age: 30
      }
    ]
  }
  switchNameHandler = () => {
    // console.log("Clicked")
    this.setState( {
       persons: [
        {
         name: 'Edd', age: 21
        },
       {
          name: 'Jo', age: 34
        }
      ]
    } )
  }
  render() {
    return (
      <div className="App">
        <h1>Yo! Whats up?</h1>
        <p>This is Working</p>
        <button onClick={this.switchNameHandler}>Switch Name</button>
        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My hobbies: Building pcs</Person>
      </div>
    );
  }
}


export default App;