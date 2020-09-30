import React from 'react';

import Person from './Person/Person';

class Persons extends React.Component {
  // getDerivedStateFromProps(props, state){
  //   console.log('Persons.js ---- get derived state from props')
  //   return state
  // }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    console.log('Persons.js ---- should component update')
    if(nextProps.persons !== this.props.persons){
      return true;
    }else {
      return false;
    }
  }


  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("persons js ----- get snapshot before upate")
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log('persons js --- component did update')
  }

  render(){
    console.log('[Persons.js] rendering...');
    return this.props.persons.map((person, index) => {
      return (
          <Person
              click={() => this.props.clicked(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={event => this.props.changed(event, person.id)}
          />
      );
    });
  }
};

export default Persons;
