import { useState } from 'react'
import GradeCard from './components/GradeCard'
import Chart from './components/Chart'
import './App.css'

const App = () => {
  //SGPA
  const [first, setFirst] = useState(0.0)
  const [second, setSecond] = useState(0.0)
  const [third, setThird] = useState(0.0)
  const [fourth, setFourth] = useState(0.0)
  const [fifth, setFifth] = useState(0.0)
  const [sixth, setSixth] = useState(0.0)
  const [seventh, setSeventh] = useState(0.0)
  const [eighth, setEighth] = useState(0.0)

  const data = require('./data.json')
  const course = data.CSE
  const courseData = [
    [
      course.sem1.map((c) => c.name),
      course.sem2.map((c) => c.name),
      course.sem3.map((c) => c.name),
      course.sem4.map((c) => c.name),
      course.sem5.map((c) => c.name),
      course.sem6.map((c) => c.name),
      course.sem7.map((c) => c.name),
      course.sem8.map((c) => c.name),
    ],
    [
      course.sem1.map((c) => c.credit),
      course.sem2.map((c) => c.credit),
      course.sem3.map((c) => c.credit),
      course.sem4.map((c) => c.credit),
      course.sem5.map((c) => c.credit),
      course.sem6.map((c) => c.credit),
      course.sem7.map((c) => c.credit),
      course.sem8.map((c) => c.credit),
    ],
  ]

  return (
    <div className="center">
      <GradeCard
        courseData={courseData}
        setGpa={[
          setFirst,
          setSecond,
          setThird,
          setFourth,
          setFifth,
          setSixth,
          setSeventh,
          setEighth,
        ]}
      />
      first={first},sec={second},third={third},fourth={fourth},fifth={fifth}
      ,sixth={sixth},seventh={seventh},eight={eighth}
      <Chart />
    </div>
  )
}
export default App
