import React, { Component } from "react";
import PropTypes from "prop-types";

class CampusCard extends Component {
  render() {
    return (
      <div className="campus-card col-6">
        <img src={this.props.imageUrl} alt="Campus" />
        <h3>{this.props.name}</h3>
        <p>{this.props.students} students</p>
        <button>edit</button>
        <button>delete</button>
      </div>
    );
  }
}

CampusCard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  students: PropTypes.number.isRequired,
};

export default CampusCard;
