import React, {Component} from 'react';
import { FaPlayCircle, FaPauseCircle } from 'react-icons/fa';
import ReactAudioPlayer from 'react-audio-player'

class Footer extends Component { 
    state = {
        audio: new Audio(this.props.currentlyPlaying.source),
        play: true
    }
  
    playNext () {
     let nextSong = this.props.nextSongId + 1
      console.log(nextSong)
      // fetch(`http://localhost:3000/songs/${nextSong}`)
      //   .then(response => response.json())
      //   .then(json => this.setState({ 
      //       currentlyPlaying: json,
      //       play: true
      //   }))
      //   .catch(error => console.error(error))
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
                 <button  onClick={this.playNext}>next</button>
            <footer className="nowplaying">
                <img src={this.props.currentlyPlaying.album} width="50px" height="50px" alt={this.props.currentlyPlaying.name}></img>
                 <ReactAudioPlayer
                    src={this.props.currentlyPlaying.source}
                    autoPlay
                    controls
                />
                <FaPlayCircle
                  onClick={this.playNext} 
                    size='27px'
                    style={{ 
                    color: 'black',
                    margin: '5px' ,
                    display: 'inline-block',
                    verticalAlign: 'middle'
                    }}
                />
                  <FaPauseCircle
                  onClick={this.playNext} 
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