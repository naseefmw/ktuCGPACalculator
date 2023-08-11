import '@radix-ui/themes/styles.css'
import { Button, Theme } from '@radix-ui/themes'

const ClearButton = ({ text, onClick }) => {
  return (
    <Theme>
      <Button
        color="crimson"
        variant="soft"
        onClick={onClick}
        className="button"
      >
        {text}
      </Button>
    </Theme>
  )
}

export default ClearButton
