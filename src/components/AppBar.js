import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Typography from '@mui/material/Typography'
import SelectMenu from './SelectMenu'
import { Toolbar } from '@mui/material'
import zIndex from '@mui/material/styles/zIndex'

export default function ButtonAppBar() {
  return (
    <>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            KTU CGPA CALCULATOR
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  )
}
