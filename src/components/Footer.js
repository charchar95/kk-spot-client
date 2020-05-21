import React, {Component} from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import ReactAudioPlayer from 'react-audio-player'

class Footer extends Component { 
    state = {
        audio: new Audio(this.props.currentlyPlaying.source),
        play: true
    }
  
   
  componentDidMount() {
    this.state.audio.addEventListener('ended', () => this.setState({ play: false }));
  }

  componentWillUnmount() {
    this.state.audio.removeEventListener('ended', () => this.setState({ play: false }));  
  }

  togglePlay = () => {
    this.setState({ play: !this.state.play }, () => {
      this.state.play ? this.state.audio.onPlay() : this.state.audio.onPause();
    });
  }
    render () {
        
        return (
            <>
            <footer className="nowplaying">
                {/* <img src={this.props.currentlyPlaying.album} width="50px" height="50px" alt={this.props.currentlyPlaying.name}></img>
                 <ReactAudioPlayer
                    src={this.props.currentlyPlaying.source}
                    autoPlay
                    controls
                /> */}
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
                  onClick={this.togglePlay} 
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