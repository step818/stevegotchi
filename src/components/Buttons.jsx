import React from 'react';

function Buttons(props) {
  return(
    <div>
      <button onClick={() => {props.onFeedClick('food', 20)}}>Feed</button>
    </div>
  );
}
  
export default Buttons;