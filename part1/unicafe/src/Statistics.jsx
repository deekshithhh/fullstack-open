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
         <table>
          <tbody>
            <tr></tr>
          </tbody>
         </table>
         <StatisticLine text="good" value={props.good}/>
          <StatisticLine text="neutral" value={props.neutral}/>
           <StatisticLine text="bad" value={props.bad}/>
          <StatisticLine text="all" value={props.total}/>
          <StatisticLine text="average:" value={(props.good - props.bad) / (props.total)}/>
          <StatisticLine text="positive" value={(props.good / props.total) * 100}/>
      </>: <p>No feedback given</p>
      }
      </div>
    </div>
  )
}

export default Statistics
