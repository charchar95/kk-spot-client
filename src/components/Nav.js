import React, {Component} from 'react';
import Dropdown from './Dropdown';




class Nav extends Component { 

    returnHome = () => {
        let homeSongs = this.props.songs
        this.props.handleDropDown(homeSongs)
    }
    render () {
        return (
            <>
            <h2 onClick={this.returnHome}>Home</h2> 
                <Dropdown
                songs={this.props.songs}
                handleDropDown={this.props.handleDropDown}
                />
            </>
        )
    }
}
export default Nav