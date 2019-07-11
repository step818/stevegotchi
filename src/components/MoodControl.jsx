import React from 'react';
import happy from '../assets/images/happyPika.png';
import dead from '../assets/images/deadPika.png'

import Buttons from './Buttons';

class MoodControl extends React.Component{
  constructor(props){
    super(props);
    this.count = 1000;
    this.state = {
      food: 10,
      imageVisibleOnPage: happy,
    };
    this.handleFeedClick = this.handleFeedClick.bind(this);
    this.currentMood = this.currentMood.bind(this);
  }

  handleFeedClick(target, amount) {
    let newFood = this.state[target];
    newFood += amount;
    if(newFood > 100){
      newFood = 100;
    }
    this.setState({[target]: newFood},()=> {
      this.currentMood();
    });
  }

  decreaseHealth(){
    let newFood = this.state.food;
    newFood = newFood - 1;
    if(newFood < 0) {newFood = 0};
    this.setState({
      food: newFood
    });
  }

  currentMood(){
    let image = this.state.imageVisibleOnPage;
    let food = this.state.food;
    if(food <= 0) {
      image = dead;
    }
    else if (food >= 1) {
      image = happy;
    }
    this.setState({imageVisibleOnPage: image});
  }

  componentDidMount() {
    this.tickTimer = setInterval(()=> {
      this.decreaseHealth();
      this.currentMood();
    }, this.count);
  }

  render(){
    const {food}= this.state
    return(
      <div>
        <div>Countdown: {food}</div> 

        <img src={this.state.imageVisibleOnPage} alt={this.state.imageVisibleOnPage}/>

        <Buttons onFeedClick={this.handleFeedClick} />
      </div>
    );
  }
}

export default MoodControl;