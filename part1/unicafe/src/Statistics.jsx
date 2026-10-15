import React from 'react'

function Statistics(props) {
  return (
    <div>
      <h3>statistics</h3>
      <div>
      {
        (props.good + props.bad +props.neutral)>0 ?  <> <p>good: {props.good}</p>
        <p>neutral : {props.neutral}</p>
        <p>bad: {props.bad}</p>
        <p>all: {props.total}</p>
        <p>average: {(props.good - props.bad) / (props.total)}</p>
        <p>positive: {(props.good / props.total) * 100}%</p></>: <p>No feedback given</p>
      }
      </div>
    </div>
  )
}

export default Statistics
