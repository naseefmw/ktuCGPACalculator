import React from 'react'
import AccordionRoot from './AccordionRoot'

const listOfGrades = ['S', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'P', 'F']
const label = 'Grades'
const titles = ['First Semester', 'Second Semester']

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

const GradeCard = ({ courseData, setSgpa1 }) => {
  const courseList = courseData[0]
  const credits = courseData[1]
  const [semOneGrades, setSemOneGrades] = React.useState(
    Array(7).fill('Select Grade')
  )
  const [semTwoGrades, setSemTwoGrades] = React.useState(
    Array(2).fill('Select Grade')
  )

  const gpaCalc = (grades, credits, totalCredits) => {
    let score = 0
    grades.forEach((grade, i) => {
      score += gpaScore(grade) * credits[i]
    })
    let gpa = (score / totalCredits).toFixed(2)
    console.log(gpa)
    setSgpa1(gpa)
  }

  const handleSem1Change = (prop) => {
    const updatedGrades = semOneGrades.map((grade, i) => {
      if (i === parseInt(prop[0])) {
        return prop.slice(1)
      } else return grade
    })
    setSemOneGrades(updatedGrades)
    gpaCalc(updatedGrades, credits[0], 17)
  }
  const handleSem2Change = (prop) => {
    const updatedGrades = semTwoGrades.map((grade, i) => {
      if (i === parseInt(prop[0])) {
        return prop.slice(1)
      } else return grade
    })
    setSemTwoGrades(updatedGrades)
  }

  return (
    <AccordionRoot
      contents={courseList}
      active={[semOneGrades, semTwoGrades]}
      list={listOfGrades}
      onChange={[handleSem1Change, handleSem2Change]}
      titles={titles}
      label={label}
    />
  )
}
export default GradeCard
