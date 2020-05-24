import React, { Component } from "react";
import { FaPlay } from 'react-icons/fa';

import "./modal.css";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
      <>
        {this.props.show && (
          <div className="modal">
              <div className="modalImage">
                <img onClick={(songid)=> this.props.playSong(songid)}  src={this.props.img} width="150px" height="150px" alt={this.props.name} ></img>
                
                  <FaPlay
                    onClick={(songid)=> this.props.playSong(songid)}
                    size='30px'
                    style={{ 
                      color: 'rgb(239,167,167)',
                      margin: '5px',
                      display: 'inline-block'
                  }}
                  />
                 
            </div>
           <div className="modalBody">
                <h1>{this.props.name}</h1>
                <h2>Genre:</h2><h3> {this.props.genre}</h3><br></br>
                <h2>Mood: </h2><h3>{this.props.mood}</h3><br></br>
            </div>
            <button onClick={this.props.onHide}>X</button>
          </div>
        )}
      </>
    );
  }
}

export default Modal;