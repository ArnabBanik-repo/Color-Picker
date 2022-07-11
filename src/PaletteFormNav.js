import React, { Component } from 'react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import { Button } from '@mui/material'
import { TextValidator, ValidatorForm } from 'react-material-ui-form-validator'
import { Link } from 'react-router-dom'
import { Box } from '@mui/system'
import PaletteMetaForm from './PaletteMetaForm'

const drawerWidth = 400

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),

  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  height: '64px',
}))

const Root = styled(Box)({
  display: 'flex',
})

const NavBtns = styled('div')({
  marginRight: '1rem',
})

const StyledButton = styled(Button)({
  margin: '0 0.5rem',
})

export default class PaletteFormNav extends Component {
  state = {
    isFormShowing: false,
  }

  showForm = () => {
    this.setState({ isFormShowing: true })
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
              <MenuIcon />
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
          <PaletteMetaForm palettes={palettes} savePalette={savePalette} />
        )}
      </Root>
    )
  }
}
