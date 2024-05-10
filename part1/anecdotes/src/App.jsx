import { useState } from 'react'

const Button = (props) => {
  return (
    <button onClick={props.handleClick}>{props.text}</button>
  )
}
const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const defaultVotes = []
  for (let i=0; i < anecdotes.length ; i++) {
    defaultVotes[i] = 0
  }

  const [currentVote, setCurrentVote] = useState(defaultVotes)

  const [selected, setSelected] = useState(0)

  const handleClick = function (){
    let randomNumber = Math.floor(Math.random() * anecdotes.length)
    setSelected(randomNumber)
  }

  const handleAddVote = () => {
    let currentVoteCopy = [...currentVote]
    currentVoteCopy[selected] += 1
    setCurrentVote([...currentVoteCopy])
  }
  const sortedVotes = [...currentVote].sort((x,y)=>{return (x>y ? 1 : x === y ? 0 : -1)})
  const mostVoted = currentVote.indexOf(sortedVotes[currentVote.length - 1])
  return (
    <div>
      <h1> Anecdote of the day</h1>
      {anecdotes[selected]}
      <p>has {currentVote[selected]} {currentVote[selected] > 0 ? "votes" : "vote"}</p>
      <Button text="Vote" handleClick={handleAddVote}/>
      <Button text="Next Anecdote" handleClick={handleClick}/>
      <h2> Anecdote with most votes</h2>
      {anecdotes[mostVoted]}
      <p>has {currentVote[mostVoted]} {currentVote[mostVoted] > 0 ? "votes" : "vote"}</p>
    </div>
  )
}

export default App
