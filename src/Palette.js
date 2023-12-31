import React, { Component } from 'react';

import ColorBox from './ColorBox';
import './Palette.css'
import Navbar from './Navbar';
import PaletteFooter from './PaletteFooter';

class Palette extends Component {
    constructor(props) {
        super(props);
        this.state = {
            level: 500,
            format: "hex"
        }
        this.changeLevel = this.changeLevel.bind(this)
        this.changeFormat = this.changeFormat.bind(this)
    }

    changeLevel(level) {
        this.setState({
            level
        })
    }

    changeFormat(format) {
        this.setState({
            format
        })
    }

    render() {
        const { id, colors, paletteName, emoji } = this.props.palette;
        const { level, format } = this.state;
        const colorBoxes = colors[level].map(color => (
            <ColorBox
                background={color[format]}
                name={color.name}
                key={color.id}
                id={color.id}
                paletteId={id}
                showLink={true}
            />
        ))
        return (
            <div className='Palette'>
                <Navbar level={level} changeLevel={this.changeLevel} handleChange={this.changeFormat} showingAllColors/>
                <div className='Palette-colors'>
                    {colorBoxes}
                </div>
                <PaletteFooter 
                    paletteName={paletteName}
                    emoji={emoji}
                />
            </div>
        );
    }
}

export default Palette;