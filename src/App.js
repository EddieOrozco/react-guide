import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person.js";

class App extends Component {
  state = {
    persons: [
      {
        id: "fsf",
        name: "Eddie",
        age: 28
      },
      {
        id: "sff",
        name: "Josh",
        age: 30
      }
    ],
    showPersons: false
  };
  switchNameHandler = newName => {
    // console.log("Clicked")
    this.setState({
      persons: [
        {
          name: newName,
          age: 21
        },
        {
          name: "Jo",
          age: 34
        }
      ]
    });
  };

  nameChangeHandler = event => {
    this.setState({
      persons: [
        {
          name: "Edd",
          age: 21
        },
        {
          name: event.target.value,
          age: 34
        }
      ]
    });
  };

  deletePersonHandler = personIndex => {
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer"
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return (
              <Person
                click={() => this.deletePersonHandler(index)}
                name={person.name}
                age={person.age}
                key={person.id}
              />
            );
          })}
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Yo! Whats up?</h1>
        <p>This is Working</p>
        <button style={style} onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
