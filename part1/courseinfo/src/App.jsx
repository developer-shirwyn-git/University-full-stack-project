const Header = (props) => {
  console.log(props)
  return <h1>{props.course.name}</h1>
}

const Content = (props) => {
  console.log(props)
  return (
    <div >
      <Part part={props.course.parts[0].name} exercise={props.course.parts[0].exercises}/>
      <Part part={props.course.parts[1].name} exercise={props.course.parts[1].exercises}/>
      <Part part={props.course.parts[2].name} exercise={props.course.parts[2].exercises}/>
    </div>
  )
}
const Total = (props) => {
  let [amount1, amount2, amount3] = props.course.parts.map(x => x.exercises)
  let total = amount1 + amount2 + amount3
  return (
    <>
      <p>Number of exercises {total}</p>
    </>
  )

}

const Part = ({part, exercise}) => {
  return (
    <>
      <p>
        {part} {exercise}
      </p>
    </>
  )

}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  )
}

export default App