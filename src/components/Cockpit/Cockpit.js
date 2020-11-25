import React, { useEffect, useRef } from 'react';
import classes from './Cockpit.css'

const cockpit = (props) => {

  const toggleBtnRef = useRef(null);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    // setTimeout(()=>{
    //   alert('Saved Data');
    // }, 1000);
    toggleBtnRef.current.click();
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

  if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); //=> "red"
  }

  if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); //=> "red bold"
  }

  return (
    <div className={classes.Cockpit}>
      <h1>{props.title}</h1>
      <p className={assignedClasses.join(' ')}>This is really working!</p>
      <div
        ref={toggleBtnRef}
        className={btnClasses.join(' ')}
        onClick={props.clicked}>Toggle Persons</div>
        <button onClick={props.login}>Log in</button> 
    </div> 
  );
};

export default React.memo(cockpit);