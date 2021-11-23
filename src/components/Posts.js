import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Posts() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://pokeapi.co/api/v2/location/")
      .then((res) => setData(res.data.results))
      .catch((err) => {
        console.log(err);
      });
  }, []);

  console.log(data)

  return (
    <div>
      {data?.map((item) => {
        return (
          <div key={item.name} id="post" className="post">
            <div className="location">
              <div><h1>{item.name}</h1></div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
