import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getAminals } from './actions/';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div>{this.props.animals}</div>          
      </div>
    );
  }
}

// export default App;
const mapStateToProps = state => {
  console.log(state);
  return {
    animals: state.animals
  }
}

export default connect(mapStateToProps, {
  getAminals
})(App)

