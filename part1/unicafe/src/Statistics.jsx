import React from 'react'
import StatisticLine from './StatisticLine'

function Statistics(props) {
  return (
    <div>
      <h3>statistics</h3>
      <div>
      {
        (props.good + props.bad +props.neutral)>0 ? 
         <>
         <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
           <StatisticLine text="bad" value={props.bad}/>
          
        <p>all: {props.total}</p>
        <p>average: {(props.good - props.bad) / (props.total)}</p>
        <p>positive: {(props.good / props.total) * 100}%</p></>: <p>No feedback given</p>
      }
      </div>
    </div>
  )
}

export default Statistics
