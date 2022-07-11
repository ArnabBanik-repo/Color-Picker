import React, { Component } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Link } from 'react-router-dom'
import PaletteMetaForm from './PaletteMetaForm'
import {
  AppBar,
  Root,
  NavBtns,
  StyledButton,
} from './styles/PaletteFormNavStyles'

export default class PaletteFormNav extends Component {
  state = {
    isFormShowing: false,
  }

  showForm = () => {
    this.setState({ isFormShowing: true })
  }

  hideForm = () => {
    this.setState({ isFormShowing: false })
  }

  render() {
    const { open, savePalette, handleDrawerOpen, palettes } = this.props
    const { isFormShowing } = this.state
    return (
      <Root>
        <CssBaseline />
        <AppBar position='fixed' open={open} color='default'>
          <Toolbar>
            <IconButton
              color='inherit'
              aria-label='open drawer'
              onClick={handleDrawerOpen}
              edge='start'
              sx={{
                mr: 2,
                ...(open && { display: 'none' }),
              }}
            >
              <ChevronRightIcon />
            </IconButton>

            <Typography variant='h6' noWrap component='div'>
              Create A Palette
            </Typography>
          </Toolbar>
          <NavBtns>
            <Link to='/' style={{ textDecoration: 'none' }}>
              <StyledButton variant={`contained`} color='error'>
                Go Back
              </StyledButton>
            </Link>
            <StyledButton variant='contained' onClick={this.showForm}>
              Save
            </StyledButton>
          </NavBtns>
        </AppBar>
        {isFormShowing && (
          <PaletteMetaForm
            palettes={palettes}
            savePalette={savePalette}
            hideForm={this.hideForm}
            open={isFormShowing}
          />
        )}
      </Root>
    )
  }
}
