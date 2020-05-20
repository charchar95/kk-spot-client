import React, {Component} from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import ReactAudioPlayer from 'react-audio-player'

class Footer extends Component { 
  
    componentDidMount() {
       this.audio = new Audio(this.props.currentlyPlaying)
        this.audio.load()
        // this.playAudio()
  }
  
 pauseSong (){
     this.audio.pause()
 }
    render () {
        
        return (
            <>
            <footer className="nowplaying">
                <img src={this.props.currentlyPlaying.album} width="50px" height="50px" alt={this.props.currentlyPlaying.name}></img>
                 <ReactAudioPlayer
                    src={this.props.currentlyPlaying.source}
                    autoPlay
                    controls
                    
                />
                
                <FaPlayCircle
                    size='27px'
                    style={{ 
                    color: 'black',
                    margin: '5px' ,
                    display: 'inline-block',
                    verticalAlign: 'middle'
                    }}
                />
                  <FaPauseCircle
                  onClick={this.pauseSong} 
                    size='27px'
                    style={{ 
                    color: 'black',
                    margin: '5px' ,
                    display: 'inline-block',
                    verticalAlign: 'middle'
                    }}
                />
            </footer>
         </>
        )
    }
}
export default Footer