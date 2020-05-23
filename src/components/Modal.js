import React, { Component } from "react";

import "./modal.css";

class Modal extends Component {
  render() {
    console.log(this.props.show);
    return (
      <>
        {this.props.show && (
          <div className="modal">
            <img src={this.props.img} width="100px" height="100px" alt={this.props.name} ></img>
            <h1>{this.props.name}</h1>
            <h2>Genre: {this.props.genre}</h2>
            <h2>Mood: {this.props.mood}</h2>
            <button onClick={this.props.onHide}>Close Modal</button>
          </div>
        )}
      </>
    );
  }
}

export default Modal;