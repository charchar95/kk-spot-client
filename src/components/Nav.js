import React, {Component} from 'react';
import Dropdown from './Dropdown';




class Nav extends Component { 
    render () {
        return (
            <>
                <Dropdown
                songs={this.props.songs}
                handleDropDown={this.props.handleDropDown}
                />
            </>
        )
    }
}
export default Nav