import { useState, useEffect } from 'react'
import GradeCard from './components/GradeCard'
import Chart from './components/Chart'
import Button from './components/Button'
import Summary from './components/Summary'
import AppBar from './components/AppBar'
import './App.css'

const App = () => {
  const [SGPA, setSGPA] = useState(Array(8).fill(0))
  const [CGPA, setCGPA] = useState(0.0)

  const [sem1Grades, setSem1Grades] = useState(Array(7).fill('Select Grade'))
  const [sem2Grades, setSem2Grades] = useState(Array(8).fill('Select Grade'))
  const [sem3Grades, setSem3Grades] = useState(Array(8).fill('Select Grade'))
  const [sem4Grades, setSem4Grades] = useState(Array(8).fill('Select Grade'))
  const [sem5Grades, setSem5Grades] = useState(Array(8).fill('Select Grade'))
  const [sem6Grades, setSem6Grades] = useState(Array(8).fill('Select Grade'))
  const [sem7Grades, setSem7Grades] = useState(Array(7).fill('Select Grade'))
  const [sem8Grades, setSem8Grades] = useState(Array(6).fill('Select Grade'))

  useEffect(() => {
    const store = window.localStorage

    const sgpaValue = store.getItem('SGPA')
    if (sgpaValue) {
      const sgpaParse = sgpaValue.split(',').map((i) => parseFloat(i))
      setSGPA(sgpaParse)
    }

    const cgpaValue = store.getItem('CGPA')
    if (cgpaValue) {
      const cgpaParse = parseFloat(cgpaValue)
      setCGPA(cgpaParse)

      const sem1Value = store.getItem('sem1Grades')
      if (sem1Value) {
        const sem1Parse = sem1Value.split(',').map((i) => i)
        setSem1Grades(sem1Parse)
      }
      const sem2Value = store.getItem('sem2Grades')
      if (sem2Value) {
        const sem2Parse = sem2Value.split(',').map((i) => i)
        setSem2Grades(sem2Parse)
      }
      const sem3Value = store.getItem('sem3Grades')
      if (sem3Value) {
        const sem3Parse = sem3Value.split(',').map((i) => i)
        setSem3Grades(sem3Parse)
      }

      const sem4Value = store.getItem('sem4Grades')
      if (sem4Value) {
        const sem4Parse = sem4Value.split(',').map((i) => i)
        setSem4Grades(sem4Parse)
      }

      const sem5Value = store.getItem('sem5Grades')
      if (sem5Value) {
        const sem5Parse = sem5Value.split(',').map((i) => i)
        setSem5Grades(sem5Parse)
      }
      const sem6Value = store.getItem('sem6Grades')
      if (sem6Value) {
        const sem6Parse = sem6Value.split(',').map((i) => i)
        setSem6Grades(sem6Parse)
      }
      const sem7Value = store.getItem('sem7Grades')
      if (sem7Value) {
        const sem7Parse = sem7Value.split(',').map((i) => i)
        setSem7Grades(sem7Parse)
      }
      const sem8Value = store.getItem('sem8Grades')
      if (sem8Value) {
        const sem8Parse = sem8Value.split(',').map((i) => i)
        setSem8Grades(sem8Parse)
      }
    }
  }, [])

  useEffect(() => {
    const value = window.localStorage
    value.setItem('SGPA', SGPA)
    value.setItem('CGPA', CGPA)
    value.setItem('sem1Grades', sem1Grades)
    value.setItem('sem2Grades', sem2Grades)
    value.setItem('sem3Grades', sem3Grades)
    value.setItem('sem4Grades', sem4Grades)
    value.setItem('sem5Grades', sem5Grades)
    value.setItem('sem6Grades', sem6Grades)
    value.setItem('sem7Grades', sem7Grades)
    value.setItem('sem8Grades', sem8Grades)
  }, [
    SGPA,
    CGPA,
    sem1Grades,
    sem2Grades,
    sem3Grades,
    sem4Grades,
    sem5Grades,
    sem6Grades,
    sem7Grades,
    sem8Grades,
  ])

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

  const handleButton = () => {
    setSGPA(Array(8).fill(0))
    setCGPA(0.0)
    setSem1Grades(Array(7).fill('Select Grade'))
    setSem2Grades(Array(8).fill('Select Grade'))
    setSem3Grades(Array(8).fill('Select Grade'))
    setSem4Grades(Array(8).fill('Select Grade'))
    setSem5Grades(Array(8).fill('Select Grade'))
    setSem6Grades(Array(8).fill('Select Grade'))
    setSem7Grades(Array(7).fill('Select Grade'))
    setSem8Grades(Array(6).fill('Select Grade'))
  }
  return (
    <>
      <AppBar />
      <div className="outerbox">
        <GradeCard
          gradeData={[
            sem1Grades,
            sem2Grades,
            sem3Grades,
            sem4Grades,
            sem5Grades,
            sem6Grades,
            sem7Grades,
            sem8Grades,
          ]}
          setGrades={[
            setSem1Grades,
            setSem2Grades,
            setSem3Grades,
            setSem4Grades,
            setSem5Grades,
            setSem6Grades,
            setSem7Grades,
            setSem8Grades,
          ]}
          courseData={courseData}
          setSgpa={setSGPA}
          sgpa={SGPA}
          setCgpa={setCGPA}
        />

        <div className="innerbox">
          <Summary gpa={[SGPA, CGPA]} />
          <Chart values={[SGPA, CGPA]} />
          <Button text={'Clear'} onClick={handleButton} />
        </div>
      </div>
    </>
  )
}
export default App
