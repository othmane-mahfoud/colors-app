import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import './Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex"
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        this.setState({ format: e.target.value })
        this.props.handleChange(e.target.value)
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href='#'>ColorApp</a>
                </div>
                <div className='slider-container'>
                    <span>Level: {level} </span>
                </div>
                <div className='slider'>
                    <Slider defaultValue={level} min={100} max={900} onAfterChange={changeLevel} step={100} />
                </div>
                <div className='select-container'>
                    <Select
                        onChange={this.handleChange}
                        value={format}
                    >
                        <MenuItem value="hex">hex</MenuItem>
                        <MenuItem value="rgb">rgb</MenuItem>
                        <MenuItem value="rgba">rgba</MenuItem>
                    </Select>
                </div>
            </header>
        );
    }
}

export default Navbar;