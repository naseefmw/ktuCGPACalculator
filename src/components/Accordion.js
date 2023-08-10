import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import classNames from 'classnames'
import { ChevronDownIcon } from '@radix-ui/react-icons'
import './styles.css'
import SelectGrade from './Select'

const data = require('../data.json')

const AccordionTrigger = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Accordion.Header className="AccordionHeader">
        <Accordion.Trigger
          className={classNames('AccordionTrigger', className)}
          {...props}
          ref={forwardedRef}
        >
          {children}
          <ChevronDownIcon className="AccordionChevron" aria-hidden />
        </Accordion.Trigger>
      </Accordion.Header>
    )
  }
)

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    //console.log(props)
    return (
      <Accordion.Content
        className={classNames('AccordionContent', className)}
        {...props}
        ref={forwardedRef}
      >
        <div className="AccordionContentText">{children}</div>
      </Accordion.Content>
    )
  }
)

const AccordionDemo = () => (
  <Accordion.Root
    className="AccordionRoot"
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <Accordion.Item className="AccordionItem" value="item-1">
      <AccordionTrigger>First Semester</AccordionTrigger>

      <AccordionContent>blah</AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-2">
      <AccordionTrigger>Second Semester</AccordionTrigger>
      <AccordionContent>
        Yes. It's unstyled by default, giving you freedom over the look and
        feel.
      </AccordionContent>
    </Accordion.Item>

    <Accordion.Item className="AccordionItem" value="item-3">
      <AccordionTrigger>Third Semester</AccordionTrigger>
      <AccordionContent className="AccordionContent">
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </Accordion.Item>
  </Accordion.Root>
)

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
