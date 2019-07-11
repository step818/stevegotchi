import React, { Component } from 'react';

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


        <MoodControl startCount='100'/>
        
        <button onClick={this.handleFeedClick}>FEED ME</button>
      </div>
    );
  }
}

export default App;
