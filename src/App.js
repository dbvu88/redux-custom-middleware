import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { connect } from 'react-redux';
import { getAnimals, addAnimal } from './actions/index';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newAnimal: ""
    }
  }
  componentDidMount() {
    this.props.getAnimals(['chicken', 'dog', 'goat', 'Duc Vu']);
  }

  addAnimal = event => {
    event.preventDefault();
    this.props.addAnimal(this.state.newAnimal);
    this.setState({ newAnimal:'' });
  }

  onFormInputChange = event => {
    this.setState({ newAnimal:event.target.value });
  }
  render() {
    console.log(this.props)
    return (
      <div className="App">
        <form>
          <input 
          name='animal' 
          value={this.state.newAnimal}
          onChange={this.onFormInputChange}
          placeholder='enter your favorite animal' />
          <button onClick={this.addAnimal} >ADD</button>
        </form>
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
  getAnimals,
  addAnimal
})(App)

