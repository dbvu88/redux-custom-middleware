import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getAnimals } from './actions/index';

class App extends Component {
  // constructor(props) {
  //   super(props);
  // }
  componentDidMount() {
    this.props.getAnimals(['chicken', 'dog', 'goat'])
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <div>{this.props.animals.map(animal => (
          <div key={animal}>{animal}</div>
        ))}</div>          
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
  getAnimals
})(App)

