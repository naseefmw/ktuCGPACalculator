import * as Accordion from '@radix-ui/react-accordion'
import './styles.css'
import SelectMenu from './SelectMenu'
import AccordionContent from './AccordionContent'
import AccordionTrigger from './AccordionTrigger'

const Content = ({ text, active, list, onChange, label, id }) => {
  return (
    <AccordionContent>
      {text}
      <SelectMenu
        id={id}
        active={active}
        list={list}
        label={label}
        onChange={onChange}
      />
    </AccordionContent>
  )
}

const AccordionGroup = ({ title, text, active, list, onChange, label }) => {
  return (
    <Accordion.Item className="AccordionItem" value={title}>
      <AccordionTrigger>{title}</AccordionTrigger>
      {text.map((t) => (
        <Content
          key={t}
          id={text.indexOf(t).toString()}
          text={t}
          active={active[text.indexOf(t)]}
          list={list}
          onChange={onChange}
          label={label}
        />
      ))}
    </Accordion.Item>
  )
}

export default AccordionGroup
