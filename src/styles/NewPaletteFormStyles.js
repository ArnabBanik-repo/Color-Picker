import { styled } from '@mui/material/styles'
import { DRAWER_WIDTH } from '../constants'
const drawerWidth = DRAWER_WIDTH

export const Main = styled('main', {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  height: 'calc(100vh - 64px)',
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}))

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}))

export const Buttons = styled('div')({
  width: '100%',
})

export const DrawerContainer = styled('div')({
  width: '90%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
})
