import React from "react"

// Code EyesOnMe Component Here
export default class EyesOnMe extends React.Component {
  focus = (e) => {
    console.log("Good!")
  } 

  blur = (e) => {
    console.log("Hey! Eyes on me!")
  }

  render() {
    return <div>
      <button type="submit" value = "submit" onFocus={this.focus} onBlur={this.blur}> Eyes on me
      </button>
    </div>
  }
} 