import React, { useState } from 'react'
import * as Select from '@radix-ui/react-select'
import classnames from 'classnames'
import {
  CheckIcon,
  ChevronDownIcon,
  ChevronUpIcon,
} from '@radix-ui/react-icons'
import './styles.css'
const SelectItem = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
    return (
      <Select.Item
        className={classnames('SelectItem', className)}
        {...props}
        ref={forwardedRef}
      >
        <Select.ItemText>{children}</Select.ItemText>
        <Select.ItemIndicator className="SelectItemIndicator">
          <CheckIcon />
        </Select.ItemIndicator>
      </Select.Item>
    )
  }
)
const MySelect = () => {
  return (
    <Select.Root>
      <Select.Trigger className="SelectTrigger">
        <Select.Value>B</Select.Value>
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <Select.Label className="SelectLabel">Grade</Select.Label>
              <SelectItem value="S">S</SelectItem>
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}

const Demo = () => {
  const [value, setValue] = useState('Select Grade')
  const listofgrades = ['A', 'B', 'C', 'G']
  const handleChange = (event) => {
    setValue(event[1])
    console.log(event)
  }
  return (
    <SelectGrade
      id={'1'}
      active={value}
      list={listofgrades}
      onchange={handleChange}
      label={'Gradess'}
    />
  )
}

const Item = ({ value, id }) => {
  return <SelectItem value={id.concat(value)}>{value}</SelectItem>
}

const SelectGrade = ({ active, list, onchange, label, id }) => {
  return (
    <Select.Root value={active} onValueChange={onchange}>
      <Select.Trigger className="SelectTrigger">
        <Select.Value>{active}</Select.Value>
        <Select.Icon className="SelectIcon">
          <ChevronDownIcon />
        </Select.Icon>
      </Select.Trigger>
      <Select.Portal>
        <Select.Content className="SelectContent">
          <Select.ScrollUpButton className="SelectScrollButton">
            <ChevronUpIcon />
          </Select.ScrollUpButton>
          <Select.Viewport className="SelectViewport">
            <Select.Group>
              <Select.Label className="SelectLabel">{label}</Select.Label>
              {list.map((item) => (
                <Item key={item} value={item} id={id} />
              ))}
            </Select.Group>
          </Select.Viewport>
          <Select.ScrollDownButton className="SelectScrollButton">
            <ChevronDownIcon />
          </Select.ScrollDownButton>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
export default SelectGrade
