import React from "react";
import "./App.scss";
import Navbar from "./Components/Navbar/navbar";
import TourList from "./Components/TourList";

export default function App() {
  return (
    <React.Fragment>
      <Navbar />
      <TourList />
    </React.Fragment>
  );
}
