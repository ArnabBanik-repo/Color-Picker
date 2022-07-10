import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import MiniPalette from './MiniPalette'
import { Root, Container, Nav, Palettes } from './styles/PaletteListStyles'

export default class PaletteList extends Component {
	goToPalette = id => {
		this.props.history.push(`/palette/${id}`)
	}
	render() {
		const { palettes } = this.props
		return (
			<Root>
				<Container>
					<Nav>
						<h2 style={{ fontSize: '2rem' }}>ColorPicker</h2>
						<Link to={`/palette/new`}>Create Palette</Link>
					</Nav>
					<Palettes>
						{palettes.map(palette => (
							<MiniPalette
								{...palette}
								key={palette.id}
								handleClick={this.goToPalette}
							/>
						))}
					</Palettes>
				</Container>
			</Root>
		)
	}
}
