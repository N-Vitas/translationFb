import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setUser } from './actions';

import {
  Grid,
  Row,
  Col,
  Image,
  Form,
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Button
} from 'react-bootstrap';

class Settings extends Component {
  constructor(props){
    super(props)
    this.state ={
      valueToken:'',
    }
    this.changeToken = this.changeToken.bind(this)
  }
  changeToken(e){
    this.setState({ valueToken: e.target.value });
  }
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Настройки голосования</h2>
          <p></p>
        </div>
        <Grid className="white">
          <Row>
            <Col md={12} xs={12}>
              <Row>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalToken">
                    <Col componentClass={ControlLabel} sm={2}>
                      Access Token
                    </Col>
                    <Col sm={8}>
                      <FormControl 
                      type="text"
                      value={this.state.valueToken}
                      placeholder="Введите acess token"
                      onChange={this.changeToken}/>
                    </Col>
                    <Col sm={2}>
                      <Button  bsStyle="success">
                        Сохранить
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
              </Row> 
            </Col>  
          </Row>          
        </Grid>
      </div>
    );
  }
}

function mapStateToProps (state) {
  return {...state.userstate}
}

function mapDispatchToProps(dispatch) {
  return {
    appAction:(user)=>{
      dispatch(setUser(user));
    }    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings)