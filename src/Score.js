import React, { useState } from "react";

function Score() {
  const [score, setScore] = useState(0)

  const handleScore = (e) => {
    if(e.target.value > score) {
      // console.log(e.target.value)
      // console.log(score)
      setScore(e.target.value)
      alert(`Score updated. Current Score: ${e.target.value}`)
    } else if (score > e.target.value) {
      setScore(score)
      // console.log(e.target.value)
      // console.log(score)
      alert('Score not updated. Input score needs to be higher than current score')
    }
  }

  return (
    <>
    <h3>Score: {score}</h3>
    <label>Give a Score: </label>
    <input type = "number" onChange = {e => handleScore(e)} />
    </>
    
  )
}

export default Score