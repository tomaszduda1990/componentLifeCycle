import React, { Component } from 'react';
import WithClass from '../../../hoc/WithClass'
import classes from './Person.css';

class Person extends Component {
    getDerivedStateFromProps(props, state){
        console.log('Person.js ---- get derived state from props')
        return state
    }
    render() {
        console.log('[Person.js] rendering...');
        return (
            <React.Fragment>
                <p onClick={this.props.click}>
                    I'm {this.props.name} and I am {this.props.age} years old!
                </p>
                <p>{this.props.children}</p>
                <input type="text" onChange={this.props.changed} value={this.props.name} />
            </React.Fragment>
        );
    }
}

export default WithClass(Person, classes.Person);
