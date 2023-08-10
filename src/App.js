import { useState } from 'react'
import GradeCard from './components/GradeCard'
import Chart from './components/Chart'
import './App.css'

const App = () => {
  const [sgpa1, setSgpa1] = useState(0.0)

  const data = require('./data.json')
  const courseData = [
    [data.CSE.sem1.map((c) => c.name), data.CSE.sem2.map((c) => c.name)],
    [data.CSE.sem1.map((c) => c.credit), data.CSE.sem2.map((c) => c.credit)],
  ]

  return (
    <div className="center">
      <GradeCard courseData={courseData} setSgpa1={setSgpa1} />
      sgpa1={sgpa1}
      <Chart />
    </div>
  )
}
export default App
