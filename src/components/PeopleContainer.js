import React, {Component} from 'react';
import {connect} from 'react-redux';
import { bindActionCreators} from 'redux';
import * as peopleActions from '../actions/people-actions';
import PersonInput from './PersonInput';
import PeopleList from './PeopleList';

class PeopleContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      people: []
    }
  }
  render() {
    return (
      <div>
        <PersonInput {...this.props} />
        <PeopleList {...this.props} />
      </div>
    )
  }
}

function mapStateToProps(state, props) {
  return {
    people: state.people
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(peopleActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PeopleContainer);
