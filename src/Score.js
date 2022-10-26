import React, { useState } from "react";

function Score() {
  const [score, setScore] = useState("0")

  return (
    <>
    <h3>Score: {score}</h3>
    <label>Give a Score: </label>
    <input type = "number" onChange = {e => setScore(e.target.value)} />
    <span style = {{color:'red'}}> Input score needs to be higher than current score</span>
    </>
    
  )
}

export default Score

//WIP class component version below
//import React, { Component } from 'react'

// class Score extends Component {
//   state = {
//     score: 0,
//     valid: false
//   }
//   handleScore = () => {

//     this.setState({
//       score: 3,
//       valid: true
//     })   
//   }

//   handleChange = (e) => {
//     console.log(e)
//     console.log(e.target.value)
//   }
  
//   render() {
    
//     return (
//       <>
//       <h3>Score: {this.state.score}</h3>
//       <label>Give a Score: </label>
//       <input type = "number" onChange = {this.handleChange}/>
//       <button type = "button" onClick = {this.handleScore}>Submit Score</button>
//       </>
//     )
//   }
// }

// export default Score
