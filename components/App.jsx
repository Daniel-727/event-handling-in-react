import React from "react";

function App() {
  

  let [buttonCSS, changeColor] = React.useState({background: "white"});

  function hover() {
    changeColor(buttonCSS = {background:"black"}); //when the mouse hovers over the button, we want to change the state so that the css for the button, specifically, the background color is black
  }

  function unHover() {
    changeColor(buttonCSS = {background:"white"}) // when the mouse leaves the button, we want the button to revert back to white
  }

  return (
    <div className="container">
      <h1>Hello</h1>
      <input type="text" placeholder="What's your name?" />
      <button style={buttonCSS} onMouseEnter={hover} onMouseLeave={unHover}> {/*the buttonCSS (default css for button is being used when the button is first rendered, which is to make the button background color white)*/}
        Submit
      </button>
    </div>
  );
}

export default App;
