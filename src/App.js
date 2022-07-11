import React, { Component } from 'react'
import Palette from './Palette'
import PaletteList from './PaletteList'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import { Route, Switch } from 'react-router-dom'
import SingleColorPalette from './SingleColorPalette'
import NewPaletteForm from './NewPaletteForm'

class App extends Component {
  constructor(props) {
    super(props)
    const savedPalettes = JSON.parse(localStorage.getItem('palettes'))
    this.state = {
      palettes: savedPalettes || seedColors,
    }
  }

  getPalette(id) {
    return this.state.palettes.find(color => color.id === id)
  }
  savePalette = newPalette => {
    this.setState(
      st => ({
        palettes: [...st.palettes, newPalette],
      }),
      () => {
        localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
      }
    )
  }
  render() {
    return (
      <div className='App'>
        <Switch>
          <Route
            exact
            path='/'
            render={routeProps => (
              <PaletteList palettes={this.state.palettes} {...routeProps} />
            )}
          ></Route>
          <Route
            path={`/palette/new`}
            exact
            render={routeProps => (
              <NewPaletteForm
                savePalette={this.savePalette}
                palettes={this.state.palettes}
                {...routeProps}
              />
            )}
          ></Route>
          <Route
            exact
            path='/palette/:id'
            render={routeProps => (
              <Palette
                palette={generatePalette(
                  this.getPalette(routeProps.match.params.id)
                )}
              />
            )}
          ></Route>
          <Route
            exact
            path={`/palette/:paletteId/:colorId`}
            render={routeProps => (
              <SingleColorPalette
                {...routeProps}
                palette={generatePalette(
                  this.getPalette(routeProps.match.params.paletteId)
                )}
              />
            )}
          ></Route>
        </Switch>
      </div>
    )
  }
}

export default App
