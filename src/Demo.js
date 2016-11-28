import React, { Component } from 'react';
import { connect } from 'react-redux';
 import logo from './logo.svg';
import { setUser } from './actions';
import {FormGroup,ControlLabel,FormControl,HelpBlock,Alert} from 'react-bootstrap';

class Demo extends Component {
  constructor(props){
    super(props)
    this.state = {
      value: '',
      alertVisible: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleAlertDismiss = this.handleAlertDismiss.bind(this)
  }

  getValidationState() {
    const length = this.state.value.length;
    if (length > 10) return 'success';
    else if (length > 5) return 'warning';
    else if (length > 0) return 'error';
  }

  handleChange(e) {
    this.setState({ value: e.target.value,alertVisible:e.target.value.length > 15 });
  }
  handleAlertDismiss(){
    this.setState({alertVisible:!this.state.alertVisible})
  }
  render() {
    return (      
      <form>
        {this.state.alertVisible ? <Alert bsStyle="success" onDismiss={this.handleAlertDismiss}>
            <strong>Holy guacamole!</strong> Best check yo self, you're not looking too good.
          </Alert>
        :null}
        <FormGroup
          controlId="formBasicText"
          validationState={this.getValidationState()}
        >
          <ControlLabel>Working example with validation</ControlLabel>
          <FormControl
            type="text"
            value={this.state.value}
            placeholder="Enter text"
            onChange={this.handleChange}
          />
          <FormControl.Feedback />
          <HelpBlock>Validation is based on string length.</HelpBlock>
        </FormGroup>
      </form>
    );
  }
}

function mapStateToProps (state) {
  return {state}
}

function mapDispatchToProps(dispatch) {
  return {dispatch}    
}

export default connect(mapStateToProps,mapDispatchToProps)(Demo)