import React, { Component } from "react";
import "./App.css";
import Palette from "./Palette";
import PaletteList from "./PaletteList";
import seedColors from "./seedColors";
import { generatePalette } from "./colorHelpers";
import { Route, Switch } from "react-router-dom";
import SingleColorPalette from "./SingleColorPalette";

class App extends Component {
  getPalette(id) {
    return seedColors.find((color) => color.id === id);
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(routeProps) => (
              <PaletteList palettes={seedColors} {...routeProps} />
            )}
          ></Route>
          <Route
            exact
            path="/palette/:id"
            render={(routeProps) => (
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
            render={(routeProps) => (
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
    );
  }
}

export default App;
