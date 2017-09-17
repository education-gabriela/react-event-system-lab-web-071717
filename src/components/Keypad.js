import React from "react";

class Keypad extends React.Component {
  pressed () {
    console.log('Entering password...');
  }
  render () {
    return (
      <input type="password" onKeyUp={this.pressed}/>
    );
  }

}

export default Keypad;
