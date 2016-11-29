import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setUser,setAccessToken,setPostId } from './actions';

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
  Button,
  Jumbotron
} from 'react-bootstrap';

class Settings extends Component {
  constructor(props){
    super(props)
    this.state ={
      valueToken:'',
      valuePostId:'',
    }
    this.changeToken = this.changeToken.bind(this)
    this.changePostId = this.changePostId.bind(this)
    
  }
  changeToken(e){
    this.setState({ valueToken: e.target.value });
  }
  changePostId(e){
    this.setState({ valuePostId: e.target.value }); 
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
              <Jumbotron>
                <p>Планирую тут сделать график подключения к api fb.</p>                
                <p>{this.props.post_id}</p>
                <p>{this.props.access_token}</p>
              </Jumbotron>
            </Col>
            <Col md={12} xs={12}>
              <Row>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalToken">
                    <Col componentClass={ControlLabel} sm={2}>
                      Ключ доступа
                    </Col>
                    <Col sm={8}>
                      <FormControl 
                      type="text"
                      value={this.state.valueToken}
                      placeholder="Введите ключ доступа"
                      onChange={this.changeToken}/>
                    </Col>
                    <Col sm={2}>
                      <Button onClick={()=>this.props.actionAccessToken(this.state.valueToken)} bsStyle="success">
                        Сохранить
                      </Button>
                    </Col>
                  </FormGroup>
                </Form>
                <Form horizontal>
                  <FormGroup controlId="formHorizontalPostId">
                    <Col componentClass={ControlLabel} sm={2}>
                      Индификатор поста
                    </Col>
                    <Col sm={8}>
                      <FormControl 
                      type="text"
                      value={this.state.valuePostId}
                      placeholder="Введите индификатор поста"
                      onChange={this.changePostId}/>
                    </Col>
                    <Col sm={2}>
                      <Button onClick={()=>this.props.actionPostId(this.state.valuePostId)} bsStyle="success">
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
    },
    actionAccessToken:(str)=>{
      dispatch(setAccessToken(str));
    },
    actionPostId:(str)=>{
      dispatch(setPostId(str));
    }    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Settings)