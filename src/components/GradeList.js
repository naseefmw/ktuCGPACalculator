import React from 'react'
import AccordGroup from './Accordion'
import * as Accordion from '@radix-ui/react-accordion'

const AccordRoot = ({ text, active, list, onChange, label }) => {
  return (
    <Accordion.Root
      className="AccordionRoot"
      type="single"
      defaultValue="item-1"
      collapsible
    >
      <AccordGroup
        text={text}
        active={active}
        list={list}
        onChange={onChange}
        label={label}
      />
    </Accordion.Root>
  )
}

const GradeList = () => {
  const [value, setValue] = React.useState(['Select Grade', 'Select Grade'])
  const listofgrades = ['A', 'B', 'C', 'G']
  const handleChange = (prop) => {
    const newValue = value.map((v, i) => {
      if (i === parseInt(prop[0])) {
        return prop[1]
      } else return v
    })
    setValue(newValue)
    console.log(newValue)
  }
  const text = ['first entry', 'second entry']
  return (
    <AccordRoot
      text={text}
      active={value}
      list={listofgrades}
      onChange={handleChange}
      label={'Gradee'}
    />
  )
}
export default GradeList
