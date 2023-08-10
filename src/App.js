import { useState } from 'react'
import Accordion from './components/Accordion'
import Chart from './components/Chart'
import './App.css'
import Demo from './components/Select'

const App = () => {
  const newCourse = {
    id: 1,
    name: 'Linear Algebra and Calculus',
    credit: 4,
  }

  const [newGrade, setNewGrade] = useState({ 1: 'A' })

  const handleChange = (event) => {
    console.log('r', event.target.value)
    //setNewGrade(prop)
  }

  const [gpa, setGpa] = useState(0)
  const [grades, setGrades] = useState(['B', 'S', 'A+', 'B+', 'P', 'S', 'A+'])

  const [semester1, setSem1] = useState([
    {
      code: 'MAT101',
      gradeValue: 'Sbit',
    },
    {
      code: 'PHT100',
      gradeValue: 0,
    },
    {
      code: 'EST100',
      gradeValue: 0,
    },
    {
      code: 'EST120',
      gradeValue: 0,
    },
    {
      code: 'HUT101',
      gradeValue: 0,
    },
    {
      code: 'PHL120',
      gradeValue: 0,
    },
    {
      code: 'ESL120',
      gradeValue: 0,
    },
  ])

  const data = require('./data.json')

  const gpaScore = (grade) => {
    let score = 0
    switch (grade) {
      case 'S':
        score = 10.0
        break
      case 'A+':
        score = 9.0
        break
      case 'A':
        score = 8.5
        break
      case 'B+':
        score = 8.0
        break
      case 'B':
        score = 7.5
        break
      case 'C+':
        score = 7.0
        break
      case 'C':
        score = 6.5
        break
      case 'D':
        score = 6.0
        break
      case 'P':
        score = 5.5
        break
      case 'F':
        score = 0.0
        break
      default:
        score = 0.0
    }
    return score
  }

  const gpaCalc = () => {
    const base = data.CSE.sem1
    let gpa = 0
    let credits = 0
    let i = 0
    base.forEach((course) => {
      gpa += course.credit * gpaScore(grades[i])
      credits += course.credit
      i++
    })
    gpa = (gpa / credits).toFixed(2)
    setGpa(gpa)
  }
  //
  return (
    <div className="center">
      <Accordion grade={newGrade} handle={handleChange} course={newCourse} />
      <Chart />
    </div>
  )
}
export default App
