import React, { useEffect } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    setTimeout(()=>{
      
    }, 1000);
    return () => {
      console.log('[Cockpit.js] cleanup');
    };
  }, []);

  useEffect(() => {
    console.log('[Cockpit.js] 2nd useEffect');
    return () => {
      console.log('[Cockpit.js] 2nd cleanup');
    };
  });

  const assignedClasses = [''];
  let btnClasses = [classes.Button];

  if (props.showPersons) {
    btnClasses.push(classes.Red);
  }

  if (props.persons.length <= 2) {
    assignedClasses.push(classes.red); //=> "red"
  }

  if (props.persons.length <= 1) {
    assignedClasses.push(classes.bold); //=> "red bold"
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <div
        className={btnClasses.join(' ')}
        onClick={props.clicked}>Toggle Persons</div>
    </div>
  );
};

export default cockpit;