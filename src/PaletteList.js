import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Avatar from '@mui/material/Avatar'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemAvatar from '@mui/material/ListItemAvatar'
import ListItemText from '@mui/material/ListItemText'
import DialogTitle from '@mui/material/DialogTitle'
import Dialog from '@mui/material/Dialog'
import MiniPalette from './MiniPalette'
import { Root, Container, Nav, Palettes } from './styles/PaletteListStyles'
import { CSSTransition } from 'react-transition-group'
import CheckIcon from '@mui/icons-material/Check'
import CloseIcon from '@mui/icons-material/Close'
import { blue, red } from '@mui/material/colors'

export default class PaletteList extends Component {
  state = {
    open: false,
    paletteId: '',
  }

  goToPalette = id => {
    this.props.history.push(`/palette/${id}`)
  }

  confirmDelete = id => {
    this.setState({
      open: true,
      paletteId: id,
    })
  }

  closeDelete = () => {
    this.setState(
      {
        open: false,
      },
      () => {
        this.setState({ paletteId: '' })
      }
    )
  }

  handleDelete = id => {
    this.props.handleDelete(id)
  }

  render() {
    const { palettes } = this.props
    const { open, paletteId } = this.state
    return (
      <Root>
        <Container>
          <Nav>
            <h2 style={{ fontSize: '2rem' }}>
              Color<span style={{ color: '#ff8f17' }}>Picker</span>
            </h2>
            <Link to={`/palette/new`}>Create Palette</Link>
          </Nav>
          <Palettes>
            {palettes.map(palette => (
              <CSSTransition key={palette.id} timeout={500} classNames={`fade`}>
                <MiniPalette
                  {...palette}
                  key={palette.id}
                  handleClick={this.goToPalette}
                  deletePalette={this.confirmDelete}
                />
              </CSSTransition>
            ))}
          </Palettes>
        </Container>
        <Dialog open={open} onClose={this.closeDelete}>
          <DialogTitle>Delete this palette?</DialogTitle>
          <List>
            <ListItem
              button
              onClick={() => {
                this.handleDelete(paletteId)
                this.closeDelete()
              }}
            >
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: blue[100], color: blue[600] }}>
                  <CheckIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Delete</ListItemText>
            </ListItem>
            <ListItem button onClick={this.closeDelete}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: red[100], color: red[600] }}>
                  <CloseIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText>Cancel</ListItemText>
            </ListItem>
          </List>
        </Dialog>
      </Root>
    )
  }
}
