import React, { Component } from 'react';
import './App.css';
// import Header from './layouts/Header.js';
import Todo from './layouts/Todo.js';
// import Footer from './layouts/Footer.js';

export default class App extends Component {
  state = {
    umur: 23
  };
  render() {
    return (
      <div className="App">
        {/* <Header/> */}
        <Todo/>
        {/* <Body name="Didik" hobby="Traveling" umur={this.state.umur}/>*/}
        {/* <Footer/> */}
      </div>
    );
  }
}

// class Body extends Component {
//   state = {
//     gender: "Male"
//   };
//   render() {
//     return (
//       <div>
//         <h2> Name : { this.props.name } </h2>
//         <h3> Hobby : { this.props.hobby } </h3>
//         <h3> Gender : { this.state.gender } </h3>
//         <h3> Umur : { this.props.umur } </h3>
//       </div>
//     );
//   }
// }

// class Counter extends Component {
//   state = {
//     counter: 0
//   };

//   plus = () => {
//     this.setState({
//       counter : this.state.counter + 1
//     });
//   };

//   minus = () => {
//     if (this.state.counter > 0){
//       this.setState({
//         counter : this.state.counter - 1
//       });
//     }
//   };

//   render() {
//     return (
//       <div>
//         <h1> { this.state.counter } </h1>
//         <button onClick={ () => this.plus() }> (+) Plus </button>
//         <button onClick={ () => this.minus() }> (-) Minus </button>
//       </div>
//     );
//   }
// }