import { useState } from 'react'

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [total,setTotal]=useState(0)

  return (
    <div>
      <h3>give feedback</h3>
    <div>
     <button onClick={()=>{setGood(good+1);
      setTotal(good+bad+neutral)
     }}>good</button>
     <button onClick={()=>{setNeutral(neutral+1);
      setTotal(good+bad+neutral)}}>neutral</button>
     <button onClick={()=>{setBad(bad+1);
      setTotal(good+bad+neutral)}}>bad</button>
    </div>
    <h3>statistics</h3>
    <div>
      <p>good: {good}</p>
      <p>neutral : {neutral}</p>
      <p>bad: {bad}</p>
      <p>all: {total}</p>
      <p>average: {(good-bad)/(total)}</p>
      <p>positive: {(good/total)*100}%</p>
      </div>
    </div>
  )
}

export default App