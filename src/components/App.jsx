import React, { Component } from 'react';
import APika from '../assets/images/happyPika.png';

import Timer from './Timer';
import MoodControl from './MoodControl';

class App extends Component {

  constructor(props) {
    super(props);
    this.handleFeedClick = this.handleFeedClick.bind(this);
  }

  handleFeedClick(){
    console.log('you fed me');
  }

  render() { 
    return (
      <div>
        <Timer startCount='100'/>


        <MoodControl />
        
        <button onClick={this.handleFeedClick}>FEED ME</button>
        <img src={ APika } alt="happy pikachu"/>
      </div>
    );
  }
}

export default App;
