import React, { Component } from 'react';
import MiniPalette from './MiniPalette';
import './PaletteList.css'

class PaletteList extends Component {
    constructor(props) {
        super(props);
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
                            <MiniPalette {...palette} />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default PaletteList;