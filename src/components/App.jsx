import React, { Component } from 'react';
import APika from '../assets/images/happyPika.png';
import Moment from 'moment';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      lifeClock: new Moment()
    };
    this.handleClock = this.handleClock.bind(this);
  }

  handleClock() {
    this.setState({lifeClock: new Moment()});
    console.log('Hey you clicked me' +  this.state.lifeClock.fromNow());
  }

  componentDidMount() {
    this.lifeClockUpdate = setInterval(() => this.updateClockElapsedTime(), 1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.lifeClockUpdate);
  }

  updateClockElapsedTime() {
    console.log("check");
  }

  render() { 
    return (
      <div>
        <h1>I'm happy</h1>
        <strong onClick={this.handleClock}>Click me to change my state</strong>
        <img src={ APika } alt="happy pikachu"/>
      </div>
    );
  }
}
 
export default App;
