import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class PaletteList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { palettes } = this.props;
        return (
            <div>
                <h1>Color App</h1>
                <div>
                    {palettes.map(palette => (
                        <Link to={`/palette/${palette.id}`}>{palette.paletteName}</Link>
                    ))}
                </div>
            </div>
        );
    }
}

export default PaletteList;