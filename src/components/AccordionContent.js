import React from 'react'
import * as Accordion from '@radix-ui/react-accordion'
import classNames from 'classnames'
import './styles.css'

const AccordionContent = React.forwardRef(
  ({ children, className, ...props }, forwardedRef) => {
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

export default AccordionContent
