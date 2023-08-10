import { useState } from 'react'
import GradeList from './components/GradeList'
import Chart from './components/Chart'
import './App.css'

const App = () => {
  const data = require('./data.json')
  const courseData = [
    data.CSE.sem1.map((c) => c.name),
    data.CSE.sem2.map((c) => c.name),
  ]

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

  const gpaCalc = () => {}

  return (
    <div className="center">
      <GradeList courseList={courseData} />
      <Chart />
    </div>
  )
}
export default App
