import React, { Component } from 'react'
import Palette from './Palette'
import PaletteList from './PaletteList'
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'
import { Route, Switch } from 'react-router-dom'
import SingleColorPalette from './SingleColorPalette'
import NewPaletteForm from './NewPaletteForm'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import Page from './Page'

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

  deletePalette = id => {
    this.setState(
      st => ({
        palettes: st.palettes.filter(palette => palette.id !== id),
      }),
      () =>
        localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
    )
  }

  render() {
    return (
      <div className='App'>
        <Route
          render={({ location }) => (
            <TransitionGroup>
              <CSSTransition key={location.key} classNames='fade' timeout={400}>
                <Switch location={location}>
                  <Route
                    exact
                    path='/'
                    render={routeProps => (
                      <Page>
                        <PaletteList
                          handleDelete={this.deletePalette}
                          palettes={this.state.palettes}
                          {...routeProps}
                        />
                      </Page>
                    )}
                  ></Route>
                  <Route
                    path={`/palette/new`}
                    exact
                    render={routeProps => (
                      <Page>
                        <NewPaletteForm
                          savePalette={this.savePalette}
                          palettes={this.state.palettes}
                          {...routeProps}
                        />
                      </Page>
                    )}
                  ></Route>
                  <Route
                    exact
                    path='/palette/:id'
                    render={routeProps => (
                      <Page>
                        <Palette
                          palette={generatePalette(
                            this.getPalette(routeProps.match.params.id)
                          )}
                        />
                      </Page>
                    )}
                  ></Route>
                  <Route
                    exact
                    path={`/palette/:paletteId/:colorId`}
                    render={routeProps => (
                      <Page>
                        <SingleColorPalette
                          {...routeProps}
                          palette={generatePalette(
                            this.getPalette(routeProps.match.params.paletteId)
                          )}
                        />
                      </Page>
                    )}
                  ></Route>
                  <Route
                    render={routeProps => (
                      <Page>
                        <PaletteList
                          handleDelete={this.deletePalette}
                          palettes={this.state.palettes}
                          {...routeProps}
                        />
                      </Page>
                    )}
                  />
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )}
        ></Route>
      </div>
    )
  }
}

export default App
