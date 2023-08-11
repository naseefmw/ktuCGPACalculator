import { useState, useEffect } from 'react'
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

  useEffect(() => {
    setFirst(JSON.parse(window.localStorage.getItem('first')))
    setSecond(JSON.parse(window.localStorage.getItem('second')))
    setThird(JSON.parse(window.localStorage.getItem('third')))
    setFourth(JSON.parse(window.localStorage.getItem('fourth')))
    setFifth(JSON.parse(window.localStorage.getItem('fifth')))
    setSixth(JSON.parse(window.localStorage.getItem('sixth')))
    setSeventh(JSON.parse(window.localStorage.getItem('seventh')))
    setEighth(JSON.parse(window.localStorage.getItem('eighth')))
  }, [])

  useEffect(() => {
    window.localStorage.setItem('first', first)
  }, [first])
  useEffect(() => {
    window.localStorage.setItem('second', second)
  }, [second])
  useEffect(() => {
    window.localStorage.setItem('third', third)
  }, [third])
  useEffect(() => {
    window.localStorage.setItem('fourth', fourth)
  }, [fourth])
  useEffect(() => {
    window.localStorage.setItem('fifth', fifth)
  }, [fifth])
  useEffect(() => {
    window.localStorage.setItem('sixth', sixth)
  }, [sixth])
  useEffect(() => {
    window.localStorage.setItem('seventh', seventh)
  }, [seventh])
  useEffect(() => {
    window.localStorage.setItem('eighth', eighth)
  }, [eighth])

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
