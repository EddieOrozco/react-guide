import React, { Component } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons.js";

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
      },
      {
        id: "fff",
        name: "Ruben",
        age: 35
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

  nameChangeHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({
      persons: persons
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
    // const style = {
    //   backgroundColor: "green",
    //   color: "white",
    //   font: "inherit",
    //   border: "1px solid blue",
    //   padding: "8px",
    //   cursor: "pointer",
    //   ":hover": {
    //     backgroundColor: "lightgreen",
    //     color: "black"
    //   }
    // };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangeHandler}
          />
        </div>
      );
      // style.backgroundColor = "red";
      // style[":hover"] = {
      //   backgroundColor: "salmon",
      //   color: "black"
      // };
    }

    const classes = [];
    if (this.state.persons.length <= 2) {
      classes.push("red"); // classes = ['red']
    }
    if (this.state.persons.length <= 1) {
      classes.push("bold"); // classes = ['red', 'bold']
    }

    return (
      <div className="App">
        <h1>Yo! Whats up?</h1>
        <p className={classes.join(" ")}>This is Working</p>
        <button className="button" onClick={this.togglePersonsHandler}>
          Toggle Persons
        </button>
        {persons}
      </div>
    );
  }
}

export default App;
