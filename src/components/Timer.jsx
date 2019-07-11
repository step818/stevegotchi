import React from 'react';

class Timer extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      count: 1
    };
    this.doIntervalChange = this.doIntervalChange.bind(this);
  }

  render(){
    const {count}= this.state
    return(
      <div>Countdown: {count}</div>  
    );
  }
  // set Interval
  componentDidMount() {
    const {startCount} = this.props;
    this.setState({
      count: startCount
    })
    this.doIntervalChange()
  }

  doIntervalChange = () => {
    this.myInterval = setInterval(()=>{
      this.setState(prevState=> ({
        count: prevState.count - 1
      }))
    }, 1000)
  }
}
  
export default Timer;