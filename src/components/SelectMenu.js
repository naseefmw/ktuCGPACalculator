import * as Select from '@radix-ui/react-select'
import SelectItem from './SelectItem'
import { ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons'
import './styles.css'

const Item = ({ value, id }) => {
  return <SelectItem value={id.concat(value)}>{value}</SelectItem>
}

const SelectMenu = ({ active, list, onChange, label, id }) => {
  return (
    <Select.Root value={active} onValueChange={onChange}>
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
export default SelectMenu
