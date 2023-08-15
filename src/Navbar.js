import React, { Component } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css'
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Snackbar from '@mui/material/Snackbar';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

import './Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            format: "hex",
            open: false
        }
        this.handleFormatChange = this.handleFormatChange.bind(this)
        this.closeSnackbar = this.closeSnackbar.bind(this)
    }

    handleFormatChange(e) {
        this.setState({ format: e.target.value, open: true })
        this.props.handleChange(e.target.value)
    }

    closeSnackbar() {
        this.setState({
            open: false
        })
    }

    render() {
        const { level, changeLevel } = this.props;
        const { format } = this.state;
        return (
            <header className='Navbar'>
                <div className='logo'>
                    <a href='#'>Color App</a>
                </div>
                <div className='slider-container'>
                    <span>Level: {level} </span>
                </div>
                <div className='slider'>
                    <Slider defaultValue={level} min={100} max={900} onAfterChange={changeLevel} step={100} />
                </div>
                <div className='select-container'>
                    <Select
                        onChange={this.handleFormatChange}
                        value={format}
                    >
                        <MenuItem value="hex">hex</MenuItem>
                        <MenuItem value="rgb">rgb</MenuItem>
                        <MenuItem value="rgba">rgba</MenuItem>
                    </Select>
                </div>
                <Snackbar
                    anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
                    open={this.state.open}
                    autoHideDuration={2000}
                    message={<span>Format Changed Successfully</span>}
                    ContentProps={{
                        "aria-describedby": "message-id"
                    }}
                    onClose={this.closeSnackbar}
                    action={[
                        <IconButton onClick={this.closeSnackbar} color='inherit'>
                            <CloseIcon />
                        </IconButton>
                    ]}
                />
            </header>
        );
    }
}

export default Navbar;