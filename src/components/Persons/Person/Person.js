import React , {Component}from 'react';
import classes from './Person.css';
import Aux from '../../../hoc/Aux';
import PropTypes from 'prop-types';

class Person extends Component {
    render () {
        console.log('[Person.js] rendering...')

        return <Aux>
            {this.props.isAuth ? <p>Authenticated!</p> : <p>Log in please!</p>}
            <p key="i1" onClick={this.props.click}>I'm {this.props.name} and I am {this.props.age} years old!</p>
            <p key="i2">{this.props.children}</p>
            <input
                key="i3"
                type="text" 
                onChange={this.props.changed}
                value={this.props.name}/>
            </Aux> 
         
    }
};

Person.propTypes = {
    click: PropTypes.func,
    name: PropTypes.string,
    age: PropTypes.number,
    changed: PropTypes.func
}
export default Person;