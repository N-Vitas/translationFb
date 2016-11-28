import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { setUser } from './actions';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 onClick={this.props.appAction.bind(this,'Gogol')}>Welcome { this.props.user } to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

function mapStateToProps (state, ownProps) {
  console.log('mapStateToProps',state,ownProps);
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return {
    appAction:(user)=>{
      dispatch(setUser(user));
    }    
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App)
