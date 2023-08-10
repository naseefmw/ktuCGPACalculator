import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import './styles.css'
import SelectGrade from './Select'
import AccordionContent from './AccordionContent'
import AccordionTrigger from './AccordionTrigger'

const Content = ({ text, active, list, onchange, label, id }) => {
  return (
    <AccordionContent>
      {text}
      <SelectGrade
        id={id}
        active={active}
        list={list}
        label={label}
        onchange={onchange}
      />
    </AccordionContent>
  )
}

const AccordGroup = ({ text, active, list, onchange, label }) => {
  return (
    <Accordion.Item className="AccordionItem" value="i">
      <AccordionTrigger>Second Semester</AccordionTrigger>
      {text.map((t) => (
        <Content
          key={t}
          id={text.indexOf(t).toString()}
          text={t}
          active={active[text.indexOf(t)]}
          list={list}
          onchange={onchange}
          label={label}
        />
      ))}
    </Accordion.Item>
  )
}

const AccordRoot = ({ text, active, list, onchange, label }) => {
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
        onchange={onchange}
        label={label}
      />
    </Accordion.Root>
  )
}

const Accord = () => {
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
      onchange={handleChange}
      label={'Gradee'}
    />
  )
}
export default Accord
