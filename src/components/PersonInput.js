import React, {Component} from 'react';

class PersonInput extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(evt) {
    evt.preventDefault();
    const {personName} = this.refs
    this.props.actions.addPerson({
      name: personName.value
    })
    personName.value = '';
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="personName" />
        <button>Create</button>
      </form>
    )
  }
}

export default PersonInput;
