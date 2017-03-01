import React, {Component} from 'react';
import Person from './Person';

class PeopleList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        {this.props.people.map( (person,i) => <Person person={person} key={i} />)}
      </div>
    )
  }
}

export default PeopleList;
