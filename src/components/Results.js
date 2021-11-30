import React, { useState, useEffect } from "react";
import axios from "axios";

import { Data } from "./Data";

export default function Results() {
  const [currentPageUrl] = useState(
    "https://pokeapi.co/api/v2/location?offset=0&limit=25"
  );

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [searchData] = useState(Data);

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/location?offset=0&limit=100")
      .then((response) => {
        setAllData(response.data);
        setFilteredData(response.data.results);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, [currentPageUrl]);

  const handleSearch = (event) => {
    let value = event.target.value.toLowerCase();
    let result = [];
    result = allData.results.filter((data) => {
      return data.name.search(value) !== -1;
    });
    setFilteredData(result);
  };

  return (
    <div id="">
      <form id="search-btns">
        <h4>Popular Locations</h4>
        <input
          type="text"
          id="buscar"
          placeholder="Search Locations"
          onChange={(event) => {
            event.preventDefault();
            handleSearch(event);
          }}
        />
      </form>

      <div id="posts">
        {filteredData.map((value) => {
          return (
            <div key={value.name} id="post" className="post">
              <h1 className="city">{value.name}</h1>
              <div id="top">
                <img
                  id="l-img"
                  src={
                    searchData[Math.floor(Math.random() * searchData.length)]
                      .url
                  }
                  alt="yes"
                />
                <div id="lorem">
                  <h4>About {value.name}:</h4>
                  <p className="p">
                    {
                      searchData[Math.floor(Math.random() * searchData.length)]
                        .description
                    }
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
