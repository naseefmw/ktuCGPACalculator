import { useState, useEffect } from 'react'
import GradeCard from './components/GradeCard'
import Chart from './components/Chart'
import './App.css'

const App = () => {
  const [SGPA, setSGPA] = useState(Array(8).fill(0))
  const [CGPA, setCGPA] = useState(0.0)

  useEffect(() => {
    const value = window.localStorage.getItem('SGPA')
    let valueParse = Array(8).fill(0)
    if (value) {
      valueParse = value.split(',').map((i) => parseFloat(i))
      setSGPA(valueParse)
    }
    const value2 = window.localStorage.getItem('CGPA')
    if (value2) {
      const valueParse2 = parseFloat(value2)
      console.log(valueParse2)
      setCGPA(valueParse2)
    }
  }, [])

  useEffect(() => {
    window.localStorage.setItem('SGPA', SGPA)
    window.localStorage.setItem('CGPA', CGPA)
  }, [SGPA, CGPA])

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
        setSgpa={setSGPA}
        sgpa={SGPA}
        setCgpa={setCGPA}
      />
      {SGPA} <br />
      {CGPA}
      <Chart />
    </div>
  )
}
export default App
