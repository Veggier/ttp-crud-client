import React, { Component } from "react";
import CampusCard from "./CampusCard";
import CampusForm from "./CampusForm";

class Campuses extends Component {
  constructor(props) {
    super(props);
    this.state = {
      campuses: [
        {
          name: "Brooklyn College",
          imageUrl: "https://via.placeholder.com/150",
          students: 32,
        },
        {
          name: "CSI",
          imageUrl: "https://via.placeholder.com/150",
          students: 23,
        },
        {
          name: "John Jay",
          imageUrl: "https://via.placeholder.com/150",
          students: 26,
        },
      ],
    };
  }

  handleAddCampus = (name) => {
    console.log(name);
    const newState = { ...this.state };
    const newCampus = {
      name: name,
      imageUrl: "https://via.placeholder.com/150",
      students: 0,
    };
    newState.campuses = newState.campuses.concat(newCampus);
    this.setState(newState);
  };

  render() {
    const campuses = () =>
      this.state.campuses.map((campus) => {
        return (
          <CampusCard
            key={campus.name}
            name={campus.name}
            imageUrl={campus.imageUrl}
            students={campus.students}
          />
        );
      });

    return (
      <>
        <CampusForm onSubmit={this.handleAddCampus} />
        <div className="row campuses">{campuses()}</div>
      </>
    );
  }
}

export default Campuses;
