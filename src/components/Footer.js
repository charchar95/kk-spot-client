import React, {Component, } from 'react';
import { FaPlayCircle, FaPauseCircle, FaForward, FaBackward } from 'react-icons/fa';

class Footer extends Component { 
  constructor(props) {
    super(props);
    this.state = {
      playing: false,
      currentTrackIndex: 0
    };
    this.handleClick = this.handleClick.bind(this);
    this.playAudio = this.playAudio.bind(this);
    this.pauseAudio = this.pauseAudio.bind(this);
  }

  playNext () {
    console.log("play next " + this.props.nextSongId)
    let newId = this.props.nextSongId + 1
    if (newId === 96) {
      newId = 1
    }
    console.log("newId is "+ newId)
   this.props.fetchNext(newId)
  }

  playPrevious () {
    console.log("play previous " + this.props.nextSongId)
    let newId = this.props.nextSongId - 1
    if (newId === 0) {
      newId = 95
    }
    console.log("newId is "+ newId)
   this.props.fetchPrevious(newId)
  }

  playAudio(){
    this.audioElement.play();
  }
  pauseAudio(){
    this.audioElement.pause();
  }
 
  handleClick(e) {
    switch (e.target.id) {
      case "play":
        this.setState((state, props) => {
          let currentTrackIndex = state.currentTrackIndex;
          if (currentTrackIndex === 0) {
            currentTrackIndex = 1;
          }
          return {
            playing: true,
            currentTrackIndex: currentTrackIndex
          };
        },this.playAudio);
        break;
      case "pause":
        this.setState({ playing: false },this.pauseAudio);
        break;
      default:
        break;
    }
  }

    render () {
        
        return (
            <>
            <footer className="nowplaying">
                <img src={this.props.currentlyPlaying.album} width="50px" height="50px" alt={this.props.currentlyPlaying.name}></img>
                 <audio 
                 ref={(audio)=>{this.audioElement = audio}}
                 className='audio-element'
                     autoPlay
                    // controls
                    src={this.props.currentlyPlaying.source} >
                </audio>
                <FaBackward
                  onClick={()=> this.playPrevious(this.props.nextSongId)}
                    size='27px'
                    style={{ 
                    color: 'black',
                    margin: '5px' ,
                    display: 'inline-block',
                    verticalAlign: 'middle'
                    }}
                    />
              <FaPlayCircle
                id="play"
                  onClick={this.handleClick} 
                    size='27px'
                    style={{ 
                    color: 'black',
                    margin: '5px' ,
                    display: 'inline-block',
                    verticalAlign: 'middle'
                    }}
                />
              <FaPauseCircle
                  id="pause"
                  onClick={this.handleClick} 
                    size='27px'
                    style={{ 
                    color: 'black',
                    margin: '5px' ,
                    display: 'inline-block',
                    verticalAlign: 'middle'
                    }}
                />
              <FaForward
                id="next"
                  onClick={()=> this.playNext(this.props.nextSongId)}
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