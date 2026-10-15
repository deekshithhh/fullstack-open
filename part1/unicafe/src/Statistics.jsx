import React from 'react'

function Statistics(props) {
  return (
    <div>
      <h3>statistics</h3>
      <div>
        <p>good: {props.good}</p>
        <p>neutral : {props.neutral}</p>
        <p>bad: {props.bad}</p>
        <p>all: {props.total}</p>
        <p>average: {(props.good - props.bad) / (props.total)}</p>
        <p>positive: {(props.good / props.total) * 100}%</p>
      </div>
    </div>
  )
}

export default Statistics
