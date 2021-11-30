import React, { useState } from "react";
import { Data } from "./Data";

export default function Locations({ location }) {
  const [data] = useState(Data);

  return (
    <div id="posts">
      {location.map((l) => (
        <div key={l} id="post" className="post">
          <h1 className="city">{l}</h1>
          <div id="top">
            <img id="l-img" src={data[Math.floor(Math.random() * data.length)].url} alt="yes" />
            <div id="lorem">
              <h4>About {l}:</h4>
              <p className="p">{data[Math.floor(Math.random() * data.length)].description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
