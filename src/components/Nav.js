import React, {Component} from 'react';
import Dropdown from './Dropdown';
import { FaHome } from 'react-icons/fa';



class Nav extends Component { 

    returnHome = () => {
        let homeSongs = this.props.songs
        this.props.handleDropDown(homeSongs)
    }
    render () {
        return (
            <>
            <div className="home">
          <FaHome 
             size='25px'
             style={{ 
             color: 'black',
             margin: '5px' ,
             display: 'block',
             verticalAlign: 'middle'
           }}
          
          />  
          <h2 onClick={this.returnHome}>Home</h2> 
          </div>
            <Dropdown
                songs={this.props.songs}
                handleDropDown={this.props.handleDropDown}
                />
            </>
        )
    }
}
export default Nav