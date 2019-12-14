import React, {useEffect} from 'react';
import classes from './Cockpit.css';


const Cockpit = (props) => {

    useEffect(() => {
        console.log('[Cockpit.js] useEffect');
        // HTTP request...
        setTimeout(  () => { 
            alert('Saved data to cloud!');
        } , 1000);
        return () => {
            console.log('[Cockpit.js] cleanup work in useEffect')
        }
    }, []);

    let btnClass = '';
    // let classes = ['red', 'bold'].join(' '); //"red bold"
    const assignedClasses = [];
    if (props.showPersons) {
        btnClass = classes.Red;
    }
    if (props.personsLength <= 2) {
    assignedClasses.push(classes.red); // classes = ['red']
    }
    if (props.personsLength <= 1) {
    assignedClasses.push(classes.bold); // classes = ['red', 'bold']
    }

    return (
    <div className={classes.cockpit}>
        <h1>{props.title}</h1>
        <p className={assignedClasses.join(' ')}>This is really working!</p>
        <button
            className={btnClass}
            onClick={props.clicked}>
                Toggle Persons </button>
    </div>
    );
}

export default React.memo(Cockpit);