import React, { Component } from 'react';
import classes from './App.css';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';
import withClass from '../hoc/withClass';
import Aux from '../hoc/Auxiliary';
import AuthContext from '../context/auth-context';

// const StyledButton = styled.button`
//   color: white;
//   background-color: ${props => props.alt ? 'red' : 'green'};
//   font: inherit;
//   border: 1px solid blue;
//   padding: 8px;
//   cursor: pointer;

//   &:hover {
//     background-color: ${props => props.alt ? 'salmon' : 'lightgreen'};
//     color: black;
//   }
// `;

class App extends Component {

  constructor(props) {
    super(props);
    console.log('[App.js] constructor');
  }

  state = {
    persons: [
      { id: 's2cv4', name: 'Max', age: 28 },
      { id: 'sqadf', name: 'Mike', age: 26 },
      { id: 'shja2', name: 'Jess', age: 18 }
    ],
    otherState: 'some other value',
    showPersons: false,
    showCockpit: true,
    changeCounter: 0,
    authenticated: false
  }

  static getDerivedStateFromProps(props, state) {
    console.log('[App.js] getDerivedStateFromProps', props);
    return state;
  }

  componentDidMount() {
    console.log('[App.js] componentDidMount');
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log('[App.js] shouldComponentUpdate');
    return true;
  }

  componentDidUpdate() {
    console.log('[App.js] componentDidUpdate');
  }

  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  }

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    }

    //const person = Object.assign({}, this.state.persons[person]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState((prevState, props) => {
      return {
        persons: persons,
        changeCounter: ++prevState.changeCounter
      }
    });
  }

  togglePersonsHandler = () => {
    this.setState({ showPersons: !this.state.showPersons });
  }

  loginHandler = () => {
    this.setState({ authenticated: true });
  }


  render() {
    console.log('[App.js] render');
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          <Persons
            persons={this.state.persons}
            clicked={this.deletePersonHandler}
            changed={this.nameChangedHandler}
            isAuthenticated={this.state.authenticated}
          ></Persons>
        </div>
      );
    }

    return (
      <Aux>
        <button onClick={() => this.setState({ showCockpit: !this.state.showCockpit })}>Remove Cockpit</button>
        <AuthContext.Provider>
          {this.state.showCockpit ?
            <Cockpit
              title={this.props.appTitle}
              personsLength={this.state.persons.length}
              showPersons={this.state.showPersons}
              clicked={this.togglePersonsHandler}
              login={this.loginHandler}
            ></Cockpit> : null}
          {persons}
        </AuthContext.Provider>
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Hi i\'m React App!!!'));
  }
}

export default withClass(App, classes.App);