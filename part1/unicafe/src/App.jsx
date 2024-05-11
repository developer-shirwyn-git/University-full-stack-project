import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>
        {props.text}
    </button>

  )
}

const Stats = (props) => {
  const good= props.good
  const neutral= props.neutral
  const bad= props.bad
  const total = props.total
  const average = total == 0 ? 0 : parseFloat((good - bad) / total)
  const positive = total == 0 ? 0 : good / total
  return (
    <>
      <h2>Statistics</h2>
      {total != 0 ? (
        <>
        <table>
          <tbody>
            <tr>
              <td>{"good"} {good}</td>
            </tr>
            <tr>
              <td>{"neutral"} {neutral}</td>
            </tr>
            <tr>
              <td>{"bad"} {bad}</td>
            </tr>
            <tr>
              <td>{"average"} {average}</td>
            </tr>
            <tr>
              <td>{"positive"} {positive}</td>
            </tr>
          </tbody>
        </table>
        <p>Total {total}</p>
        </>
      ) : (
        <p>No Feedback given</p>
      )
      }
    </>

  )
}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClick=(currentRating, addRating) => ()=>{
    let updatedRating = currentRating + 1
    addRating(updatedRating)
  }

  const total = good + neutral + bad

  return (
    <div>
      <h1>Give Feedback</h1>
      <Button text={"good"} handleClick={handleClick(good, setGood)}/>
      <Button text={"neutral"} handleClick={handleClick(neutral, setNeutral)}/>
      <Button text={"bad"} handleClick={handleClick(bad, setBad)}/>
      <div>

      </div>

      <Stats total={total} good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App