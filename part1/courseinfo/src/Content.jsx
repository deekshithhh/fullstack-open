import React from 'react'
import Part from './Part'

function Content({part1,part2,part3,exercises1,exercises2,exercises3}) {
  return (
   <>
    <Part part={part1} excercise={exercises1}/>
    <Part part={part2} excercise={exercises2}/>
    <Part part={part3} excercise={exercises3}/>
   </>
  )
}

export default Content
