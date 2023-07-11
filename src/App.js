
const Header = (header) => {
  console.log(header)
  return(<h1>{header.name}</h1>)
}

const Part = (content) => {
  return (<div> <p>{content.name} {content.exercise}</p> </div>)
}

const Content = (content) => {
  return (
      <div>
        <Part name={content.parts[0].names}
        exercise={content.parts[0].exercise}
        />
        <Part name={content.parts[1].names}
              exercise={content.parts[1].exercise}
        />
        <Part name={content.parts[2].names}
              exercise={content.parts[2].exercise}
        />
      </div>
  )
}

const Total = (total) => {
  return (
      <div>
        <p>Total:{" "}{total.parts[0].exercise + total.parts[1].exercise + total.parts[2].exercise}</p>
      </div>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        names: 'Fundamentals of React',
        exercise: 10,
      },
      {
        names: 'Using props to pass data',
        exercise: 7,
      },
      {
        names: 'State of a component',
        exercise: 14,
      },
    ],
  };

  return(
      <div>
      <Header name={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
        </div>
        )
}

export default App;