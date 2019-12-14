import React, {PureComponent} from 'react';
import Person from './Person/Person';

class Persons extends PureComponent {
  // static getDerivedStateFromProps(props,state){
  //   console.log('[Person.js] getDerivedStateFromProps');
  //   return state;
  // }

  // componentWillReceiveProps(

  // )

  // shouldComponentUpdate(nextProps,nextState) {
  //   console.log('[Persons.js] shouldComponentUpdate');
  //   if (nextProps !== this.props.persons)
  //   {
  //     return true;
  //   } else {
  //     return false;
  //   }
  // } 

  getSnapshotBeforeUpdate(prevProps,prevState) {
    console.log('[Persons.js] getSnapshotBeforeUpdate');
    return {message: 'Snapshot!' };
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('[Persons.js] componentDidUpdate')
    console.log(snapshot);
  }

  componentWillUnmount() {
    console.log('[Persons.js] componentWillUnmount')
  }

  render(){
    return this.props.persons.map((persons, index) => {
      console.log('[Persons.js] rendering...')      
      return <Person 
              click={() => this.props.clicked(index)}
              name={persons.name}
              age={persons.age}
              key={persons.id}
              changed={(event) => this.props.changed(event, persons.id)}/>
          });
    
  }
}
export default Persons; 