import React from 'react'
import AccordionGroup from './Accordion'
import * as Accordion from '@radix-ui/react-accordion'

const listOfGrades = ['S', 'A+', 'A', 'B+', 'B', 'C+', 'C', 'D', 'P', 'F']
const label = 'Grades'
const titles = ['First Semester', 'Second Semester']

const AccordionRoot = ({ contents, active, onChange }) => {
  return (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      {titles.map((title, i) => (
        <AccordionGroup
          key={title}
          title={title}
          text={contents[i]}
          active={active[i]}
          onChange={onChange[i]}
          list={listOfGrades}
          label={label}
        />
      ))}
    </Accordion.Root>
  )
}

const GradeList = ({ courseList }) => {
  const [semOneGrades, setSemOneGrades] = React.useState(
    Array(7).fill('Select Grade')
  )
  const [semTwoGrades, setSemTwoGrades] = React.useState(
    Array(2).fill('Select Grade')
  )

  const handleSem1Change = (prop) => {
    const updatedGrades = semOneGrades.map((grade, i) => {
      if (i === parseInt(prop[0])) {
        return prop.slice(1)
      } else return grade
    })
    setSemOneGrades(updatedGrades)
    console.log(updatedGrades)
  }
  const handleSem2Change = (prop) => {
    const updatedGrades = semTwoGrades.map((grade, i) => {
      if (i === parseInt(prop[0])) {
        return prop.slice(1)
      } else return grade
    })
    setSemTwoGrades(updatedGrades)
    console.log(updatedGrades)
  }

  return (
    <AccordionRoot
      contents={courseList}
      active={[semOneGrades, semTwoGrades]}
      list={listOfGrades}
      onChange={[handleSem1Change, handleSem2Change]}
    />
  )
}
export default GradeList
