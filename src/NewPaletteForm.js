import React, { Component } from 'react'
import PaletteFormNav from './PaletteFormNav'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import { Button } from '@mui/material'
import DraggableColorBoxList from './DraggableColorBoxList'
import { arrayMoveImmutable } from 'array-move'
import ColorPickerForm from './ColorPickerForm'
import {
  Main,
  DrawerHeader,
  DrawerContainer,
  Buttons,
} from './styles/NewPaletteFormStyles'
import { DRAWER_WIDTH } from './constants'

export default class NewPaletteForm extends Component {
  static defaultProps = {
    maxColors: 20,
  }
  constructor(props) {
    super(props)
    this.state = {
      open: true,
      colors:
        this.props.palettes[
          Math.floor(Math.random() * this.props.palettes.length)
        ].colors,
    }
  }

  savePalette = (paletteName, paletteEmoji) => {
    const newPalette = {
      paletteName: paletteName,
      emoji: paletteEmoji,
      id: paletteName.toLowerCase().replace(/ /g, '-'),
      colors: this.state.colors,
    }
    this.props.savePalette(newPalette)
    this.props.history.push('/')
  }

  addRandomColor = () => {
    const palette = Math.floor(Math.random() * this.props.palettes.length)
    const color = Math.floor(
      Math.random() * this.props.palettes[palette].colors.length
    )
    const newColor = this.props.palettes[palette].colors[color]
    this.state.colors.every(color => color.color !== newColor.color) &&
      this.setState(st => ({
        colors: [...st.colors, newColor],
      }))
  }

  addColor = newColor => {
    this.setState(
      st => ({
        colors: [...st.colors, newColor],
      }),
      () => {
        this.setState({ colorName: '', curr_color: '' })
      }
    )
  }

  deleteColor = colorName => {
    this.setState(st => ({
      colors: st.colors.filter(({ name }) => name !== colorName),
    }))
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value,
    })
  }

  handleDrawerOpen = () => {
    this.setState({
      open: true,
    })
  }

  handleDrawerClose = () => {
    this.setState({
      open: false,
    })
  }

  onSortEnd = ({ oldIndex, newIndex }) => {
    this.setState(({ colors }) => ({
      colors: arrayMoveImmutable(colors, oldIndex, newIndex),
    }))
  }

  render() {
    const { open, colors } = this.state
    const { maxColors, palettes } = this.props

    const isFull = colors.length >= maxColors
    return (
      <Box sx={{ display: 'flex' }}>
        <PaletteFormNav
          open={open}
          palettes={palettes}
          savePalette={this.savePalette}
          handleDrawerOpen={this.handleDrawerOpen}
          handleDrawerClose={this.handleDrawerClose}
        />
        <Drawer
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH,
              boxSizing: 'border-box',
              display: 'flex',
              alignItems: 'center',
            },
          }}
          variant='persistent'
          anchor='left'
          open={open}
        >
          <DrawerHeader
            sx={{
              alignSelf: 'flex-end',
            }}
          >
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </DrawerHeader>
          <Divider />
          <DrawerContainer>
            <Typography variant='h4' gutterBottom>
              Design Your Palette
            </Typography>
            <Buttons>
              <Button
                variant={`contained`}
                color={`error`}
                sx={{ width: '49%', marginRight: '2%' }}
                onClick={() => this.setState({ colors: [] })}
              >
                Clear Palette
              </Button>
              <Button
                variant={`contained`}
                color={`primary`}
                sx={{ width: '49%' }}
                disabled={isFull}
                onClick={this.addRandomColor}
              >
                Random Color
              </Button>
            </Buttons>
            <ColorPickerForm
              colors={colors}
              addColor={this.addColor}
              isFull={isFull}
            />
          </DrawerContainer>
        </Drawer>
        <Main open={open}>
          <DrawerHeader />

          <DraggableColorBoxList
            colors={colors}
            deleteColor={this.deleteColor}
            axis='xy'
            onSortEnd={this.onSortEnd}
          />
        </Main>
      </Box>
    )
  }
}
