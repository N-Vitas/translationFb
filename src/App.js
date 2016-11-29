import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setUser } from './actions';


import kh from './Khinkali_david.jpg';
import pr from './pribor.jpg';
import like from './tup.png';
import love from './h.png';

import {
  Grid,
  Row,
  Col,
  Image
} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Grid>
        <Row className="plases">
          <Col xs={12} md={12}>
            <div className="title">
              <h1>чем вы едите хинкали <br/>руками или приборами?</h1>               
                <p>{this.props.post_id}</p>
                <p>{this.props.access_token}</p>
            </div>
          </Col>

          <Col xs={6} md={6}>
            <div className="avatar">
              <Image src={kh} circle alt=""/>
            </div>
            <div className="meta">
              <img src={like} alt="" className="icon"/>
              <div className="ch">{this.props.like}</div>
              <div className="v">ГОЛОСОВ</div>
            </div>
          </Col>
          <Col xs={6} md={6}>
            <div className="avatar">
              <Image src={pr} circle alt=""/>
            </div>
            <div className="meta">
              <img src={love} alt="" className="icon"/>
              <div className="ct">{this.props.love}</div>
              <div className="v">ГОЛОСОВ</div>
            </div>
          </Col>

        </Row>
      </Grid>
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

export default connect(mapStateToProps,mapDispatchToProps)(App)
