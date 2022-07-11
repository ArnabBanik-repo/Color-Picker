import { styled } from '@mui/material/styles'
import { Box, Button } from '@mui/material'
import MuiAppBar from '@mui/material/AppBar'
import { DRAWER_WIDTH } from '../constants'
const drawerWidth = DRAWER_WIDTH

export const AppBar = styled(MuiAppBar, {
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

export const Root = styled(Box)({
  display: 'flex',
})

export const NavBtns = styled('div')({
  marginRight: '1rem',
})

export const StyledButton = styled(Button)({
  margin: '0 0.5rem',
})
