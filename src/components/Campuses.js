import React, { Component } from "react";
import CampusCard from "./CampusCard";

class Campuses extends Component {
  render() {
    return (
      <div className="row campuses">
        <CampusCard
          name="Brooklyn College"
          imageUrl="https://via.placeholder.com/150"
          students={32}
        />
        <CampusCard
          name="College of Staten Island"
          imageUrl="https://via.placeholder.com/150"
          students={26}
        />
        <CampusCard
          name="John Jay"
          imageUrl="https://via.placeholder.com/150"
          students={25}
        />
      </div>
    );
  }
}

export default Campuses;
