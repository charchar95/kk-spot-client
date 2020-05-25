import React, {Component} from 'react';
import Dropdown from './Dropdown';
import { FaHome } from 'react-icons/fa';



class Nav extends Component { 

    returnHome = () => {
        let homeSongs = this.props.songs
        this.props.handleDropDown(homeSongs)
    }


    filterlikes = ()=> {
        let likes = this.props.songs.filter(song => song.likes === 'Classical') 
        this.props.handleDropDown(likes)
        console.log(likes)
    }

    render () {
        return (
            <>
            {/* <div className="home"> */}
          <FaHome 
             size='25px'
             style={{ 
                color: 'black',
                position: "relative",
                marginRight: '10px',
                marginTop: '18%',
                float: 'left',
           }}
          
          />  
          <h2 onClick={this.returnHome}>Home</h2> 
          {/* </div> */}
            <Dropdown
                songs={this.props.songs}
                handleDropDown={this.props.handleDropDown}
                />
            </>
        )
    }
}
export default Nav