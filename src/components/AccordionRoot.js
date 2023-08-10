import AccordionGroup from './Accordion'
import * as Accordion from '@radix-ui/react-accordion'

const AccordionRoot = ({ contents, active, onChange, titles, list, label }) => {
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
          list={list}
          label={label}
        />
      ))}
    </Accordion.Root>
  )
}

export default AccordionRoot
