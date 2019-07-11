import React from 'react';
import happy from '../assets/images/happyPika.png';
import dead from '../assets/images/deadPika.png'

class MoodControl extends React.Component{
  constructor(props){
    super(props);
    this.count = 1000;
    this.state = {
      food: 20,
      imageVisibleOnPage: happy,
    };
  }

  handleFeedClick() {
    this.setState({imageVisibleOnPage: happy})
    console.log('Hey you fed me');
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
      </div>
    );
  }
}

export default MoodControl;