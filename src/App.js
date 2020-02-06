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
    ],
    showPersons: false
  }
  switchNameHandler = (newName) => {
    // console.log("Clicked")
    this.setState( {
       persons: [
        {
         name: newName, age: 21
        },
       {
          name: 'Jo', age: 34
        }
      ]
    } )
  }

  nameChangeHandler = (event) => {
    this.setState( {
      persons: [
       {
        name: 'Edd', age: 21
       },
      {
         name: event.target.value, age: 34
       }
     ]
   } )  
  }
  togglePersonsHandler= () => {
    const doesShow = this.state.showPersons;
    this.setState({showPersons: !doesShow})
  }

  render() {

    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor:'pointer'
    }

    let persons = null;

    if ( this.state.showPersons){
      persons = (
        <div >
          <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age}
          click={this.switchNameHandler.bind(this,'Edd!!!')}
          />
          <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          changed={this.nameChangeHandler}>
          My hobbies: Building pcs
          </Person>
        </div> 
      )
    }

    return (
      <div className="App">
        <h1>Yo! Whats up?</h1>
        <p>This is Working</p>
        <button 
          style={style}
          onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
          {persons}
      </div>
    );
  }
}


export default App;