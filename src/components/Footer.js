import React, {Component, } from 'react';
import { FaPlayCircle, FaPauseCircle, FaForward, FaBackward, FaRandom } from 'react-icons/fa';

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
    this.shuffleSongs = this.shuffleSongs.bind(this);
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


 shuffleSongs = (arr) => {
   // create a new array to not mess with this.state.song array
   let newArr = arr.filter(song => song.id > 0 )
    var ctr = newArr.length, temp, index;
    // While there are elements in the array
    while (ctr > 0) {
    // Pick a random index
        index = Math.floor(Math.random() * ctr);
    // Decrease ctr by 1
        ctr--;
    // And swap the last element with it
        temp = newArr[ctr];
        newArr[ctr] = newArr[index];
        newArr[index] = temp;
    }
    this.props.handleShuffle(newArr)
    return newArr;
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
                <FaRandom
                  onClick={() => this.shuffleSongs(this.props.songs)}
                    size='27px'
                    style={{ 
                    color: 'black',
                    margin: '5px' ,
                    display: 'inline-block',
                    verticalAlign: 'middle'
                    }}
                    />
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