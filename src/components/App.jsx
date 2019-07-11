import React, { Component } from 'react';
import APika from '../assets/images/happyPika.png';
import Moment from 'moment';

import Timer from './Timer';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      feed: new Moment()
    };
    this.handleFoodClick = this.handleFoodClick.bind(this);
  }

  handleFoodClick() {
    this.setState({feed: new Moment()});
    console.log('Hey you fed me' +  this.state.feed.fromNow());
  }


  render() { 
    return (
      <div>
        <Timer startCount='100'/>

        <strong onClick={this.handleFoodClick}>Feed Me</strong>
        
        
        <img src={ APika } alt="happy pikachu"/>
      </div>
    );
  }
}
 
export default App;
