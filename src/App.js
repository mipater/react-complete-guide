import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
      { name: 'Max', age: 28 },
      { name: 'Mike', age: 26 },
      { name: 'Jess', age: 18 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  switchNameHandler = (newName) => {
    console.log('Was clicked');
    this.setState({
      persons: [
        { name: newName, age: 28 },
        { name: 'Mike', age: 26 },
        { name: 'Jess', age: 28 }
      ]
    });
  }

  nameChangedHandler = (event) => {
    console.log('Name Changed');
    this.setState({
      persons: [
        { name: event.target.value, age: 28 },
        { name: 'Mike', age: 26 },
        { name: 'Jess', age: 28 }
      ]
    });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Person
            name={this.state.persons[0].name}
            age={this.state.persons[0].age}
            changed={this.nameChangedHandler}
          />
          <Person
            name={this.state.persons[1].name}
            age={this.state.persons[1].age}
            click={this.switchNameHandler.bind(this, 'Puff')}
            changed={this.nameChangedHandler}
          >My Hobbies: Racing</Person>
          <Person
            name={this.state.persons[2].name}
            age={this.state.persons[2].age}
            changed={this.nameChangedHandler}
          />
        </div>
      );
    }

    return (
      <div className="App">
        <h1>Hi i'm React App</h1>
        <button
          style={style}
          onClick={this.togglePersonsHandler}>Switch Name</button>
          {persons}
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'m React App!!!'));
  }
}

export default App;