import { useEffect } from 'react'
import AccordionRoot from './AccordionRoot'

const GradeCard = ({
  courseData,
  setSgpa,
  sgpa,
  setCgpa,
  gradeData,
  setGrades,
}) => {
  useEffect(() => {
    cgpaCalculator()
  })
  const listOfGrades = ['S', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'P', 'F']
  const label = 'Grades'
  const titles = [
    'First Semester',
    'Second Semester',
    'Third Semester',
    'Fourth Semester',
    'Fifth Semester',
    'Sixth Semester',
    'Seventh Semester',
    'Eighth Semester',
  ]
  const totalCredits = [17, 21, 22, 22, 23, 23, 15, 17]

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

  const gpaCalc = (grades, credits, totalCredits, setGpa, gpa, id) => {
    let score = 0
    grades.forEach((grade, i) => {
      score += gpaScore(grade) * credits[i]
    })
    let sgpa = (score / totalCredits).toFixed(2)
    const updatedGPA = gpa.map((sem, i) => {
      if (i === id) {
        return sgpa
      } else return sem
    })
    setGpa(updatedGPA)
  }

  const courseList = courseData[0]
  const credits = courseData[1]

  const cgpaCalculator = () => {
    let c_score = 0
    let c_credits = 0
    const grades = gradeData
    for (let i = 0; i < 8; i++) {
      if (grades[i].includes('Select Grade')) {
        break
      }
      for (let j = 0; grades[i][j] !== undefined; j++) {
        c_score += gpaScore(grades[i][j]) * credits[i][j]
        c_credits += credits[i][j]
      }
    }
    if (c_credits) {
      let cgpa = (c_score / c_credits).toFixed(2)
      setCgpa(cgpa)
    }
  }

  const handleSem1Change = (prop) => {
    const id = 0
    const updatedGrades = gradeData[id].map((grade, i) => {
      if (i === parseInt(prop[0])) {
        return prop.slice(1)
      } else return grade
    })
    setGrades[id](updatedGrades)
    cgpaCalculator()
    gpaCalc(updatedGrades, credits[id], totalCredits[id], setSgpa, sgpa, id)
  }

  const handleSem2Change = (prop) => {
    const id = 1
    const updatedGrades = gradeData[id].map((grade, i) => {
      if (i === parseInt(prop[0])) {
        return prop.slice(1)
      } else return grade
    })
    setGrades[id](updatedGrades)
    gpaCalc(updatedGrades, credits[id], totalCredits[id], setSgpa, sgpa, id)
    cgpaCalculator()
  }

  const handleSem3Change = (prop) => {
    const id = 2
    const updatedGrades = gradeData[id].map((grade, i) => {
      if (i === parseInt(prop[0])) {
        return prop.slice(1)
      } else return grade
    })
    setGrades[id](updatedGrades)
    gpaCalc(updatedGrades, credits[id], totalCredits[id], setSgpa, sgpa, id)
    cgpaCalculator()
  }

  const handleSem4Change = (prop) => {
    const id = 3
    const updatedGrades = gradeData[id].map((grade, i) => {
      if (i === parseInt(prop[0])) {
        return prop.slice(1)
      } else return grade
    })
    setGrades[id](updatedGrades)
    gpaCalc(updatedGrades, credits[id], totalCredits[id], setSgpa, sgpa, id)
    cgpaCalculator()
  }

  const handleSem5Change = (prop) => {
    const id = 4
    const updatedGrades = gradeData[id].map((grade, i) => {
      if (i === parseInt(prop[0])) {
        return prop.slice(1)
      } else return grade
    })
    setGrades[id](updatedGrades)
    gpaCalc(updatedGrades, credits[id], totalCredits[id], setSgpa, sgpa, id)
    cgpaCalculator()
  }

  const handleSem6Change = (prop) => {
    const id = 5
    const updatedGrades = gradeData[id].map((grade, i) => {
      if (i === parseInt(prop[0])) {
        return prop.slice(1)
      } else return grade
    })
    setGrades[id](updatedGrades)
    gpaCalc(updatedGrades, credits[id], totalCredits[id], setSgpa, sgpa, id)
    cgpaCalculator()
  }

  const handleSem7Change = (prop) => {
    const id = 6
    const updatedGrades = gradeData[id].map((grade, i) => {
      if (i === parseInt(prop[0])) {
        return prop.slice(1)
      } else return grade
    })
    setGrades[id](updatedGrades)
    gpaCalc(updatedGrades, credits[id], totalCredits[id], setSgpa, sgpa, id)
    cgpaCalculator()
  }

  const handleSem8Change = (prop) => {
    const id = 7
    const updatedGrades = gradeData[id].map((grade, i) => {
      if (i === parseInt(prop[0])) {
        return prop.slice(1)
      } else return grade
    })
    setGrades[id](updatedGrades)
    gpaCalc(updatedGrades, credits[id], totalCredits[id], setSgpa, sgpa, id)
    cgpaCalculator()
  }

  return (
    <AccordionRoot
      contents={courseList}
      active={gradeData}
      list={listOfGrades}
      onChange={[
        handleSem1Change,
        handleSem2Change,
        handleSem3Change,
        handleSem4Change,
        handleSem5Change,
        handleSem6Change,
        handleSem7Change,
        handleSem8Change,
      ]}
      titles={titles}
      label={label}
    />
  )
}
export default GradeCard
