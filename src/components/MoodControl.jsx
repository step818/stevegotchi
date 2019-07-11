import React from 'react';

class MoodControl extends React.Component{

  constructor(props){
    super(props);
    this.state = {
      moodVisibleOnPage: 3
    };
  }

  handleFeedClick() {
    this.setState({moodVisibleOnPage: 2})
    console.log('Hey you fed me');
  }

  render(){
    let currentlyVisiblContent = null;
    if (this.state.moodVisibleOnPage === 3){
      currentlyVisiblContent = 'empty';
    } else if (this.state.moodVisibleOnPage === 2){
      currentlyVisiblContent = 'full';
    }
    return(
      <div>
        {currentlyVisiblContent}
      </div>
    );
  }
}

export default MoodControl;