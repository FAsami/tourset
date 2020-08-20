import React from "react";
import "./tour.scss";
class Tour extends React.Component {
  render() {
    const { tour, onRemove } = this.props;
    return (
      <div className="tour">
        <div className="tour-header">
          <h1> {tour.name}</h1>
          <button onClick={onRemove}>Remove</button>
        </div>
        <img src={tour.img} alt={tour.city} />
        <h3>{tour.city}</h3>
        <p>{tour.info}</p>
      </div>
    );
  }
}
export default Tour;
