import React from 'react'

function StatisticLine(props) {
  return (
   <tr>
    <td>{props.text} :</td> <td>{props.value}</td></tr>
  )
}

export default StatisticLine
