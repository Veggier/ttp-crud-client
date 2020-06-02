import React, { Component } from "react";

class CampusForm extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "" };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.onSubmit(this.state.name);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="campusName"
          onChange={this.handleChange}
          value={this.state.name}
        ></input>
        <button>New campus</button>
      </form>
    );
  }
}

export default CampusForm;
