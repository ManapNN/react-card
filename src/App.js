import React from "react";
import { Card } from "./components/Card";
import "./App.css";
import pic from "./components/straw.png";

function App() {
  const data = [
    {
      title: "Physical Health",
      color: "#22356F",
    },
    {
      title: "Mental Health",
      color: "#0052C1",
    },
    {
      title: "Nutrition",
      color: null,
      img: pic,
    },
    {
      title: "Gymnastics",
      color: "#62D0DF",
    },
    {
      title: "Crossfit",
      color: "#DEE1FF",
    },
    {
      title: "Aerobics",
      color: "#8F00FF",
    },
  ];
  return (
    <div className="App">
      {data.map((el, id) => {
        return <Card data={el} key={id} />;
      })}
    </div>
  );
}

export default App;
