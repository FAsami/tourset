import React from "react";
import Tour from "../Tour";
import { tourData } from "../../tourData";
import "./tourList.scss";

class TourList extends React.Component {
  state = {
    tours: tourData
  };

  handleRemove(id) {
    const tours = this.state.tours.filter((tour) => tour.id !== id);
    this.setState({ tours });
  }

  render() {
    if (this.state.tours.length === 0)
      return <h3 className="no-tours">No tours added</h3>;
    return (
      <section className="tour-list">
        {this.state.tours.map((tour) => (
          <Tour
            key={tour.id}
            tour={tour}
            onRemove={() => this.handleRemove(tour.id)}
          />
        ))}
      </section>
    );
  }
}
export default TourList;
