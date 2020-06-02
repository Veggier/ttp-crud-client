import React, { Component } from "react";

class CampusCard extends Component {
  render() {
    return (
      <div class="campus-card">
        <img src={this.props.imageUrl} alt="Campus" />
        <h3>{this.props.name}</h3>
        <p>{this.props.students} students</p>
        <button>edit</button>
        <button>delete</button>
      </div>
    );
  }
}

export default CampusCard;
