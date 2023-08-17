import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import './PaletteList.css'

class PaletteList extends Component {
    constructor(props) {
        super(props);
    }

    goToPalette(id) {
        this.props.history.push(`/palette/${id}`)
    }

    render() {
        const { palettes } = this.props;
        return (
            <div className='PaletteList'>
                <div className='container'>
                    <nav className='nav'>
                        <h1>Color App</h1>
                    </nav>
                    <div className='palettes'>
                        {palettes.map(palette => (
                            <MiniPalette
                                {...palette}
                                handleClick={() => this.goToPalette(palette.id)}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default PaletteList;