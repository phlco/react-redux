import React, {Component} from 'react';

class Person extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    const {person} = this.props
    return (
      <div>{person.name}</div>
    )
  }
}

export default Person;
