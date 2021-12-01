import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

import { Data } from "./Data";

export default function Random() {
  const { currentUser } = useAuth();
  const [currentPageUrl] = useState(
    "https://pokeapi.co/api/v2/location?offset=0&limit=100"
  );

  const [allData, setAllData] = useState([]);
  const [filteredData, setFilteredData] = useState(allData);
  const [searchData] = useState(Data);
  const [randoData, setRandoData] = useState(false);

  useEffect(() => {
    axios("https://pokeapi.co/api/v2/location?offset=5&limit=100")
      .then((response) => {
        setAllData(response.data);
        setFilteredData(response.data.results);
      })
      .catch((error) => {
        console.log("Error getting fake data: " + error);
      });
  }, [currentPageUrl]);

  const onOff = () => {
    if (randoData === true) {
      return filteredData.slice(0, 1).map((value) => {
        return (
          <div key={value.name} id="randomP" className="randoPost">
            <h1 className="cityRando">
              {
                filteredData[Math.floor(Math.random() * filteredData.length)]
                  .name
              }
            </h1>
            <div id="topRando">
              <img
                id="l-imgRando"
                src={
                  searchData[Math.floor(Math.random() * searchData.length)].url
                }
                alt="yes"
              />
              <div id="loremRando">
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
      });
    } else {
      return null;
    }
  };

  const change = () => {
    if (randoData === false) {
      return setRandoData(true);
    } else {
      return setRandoData(false);
    }
  };

  return (
    <Container class="dashRando">
        <div id="userProfile">
          <Link
            to="/update-profile"
            id="update"
            className="btn btn-primary m-3"
          >
            Update profile
          </Link>
          <strong id="user1">Signed in as:</strong>
            <strong id="user2">{currentUser.email}</strong>
        </div>
      <div id="postsRando">
        <div id="profilePost">
          <button
            id="update"
            className="btn btn-primary m-3"
            onClick={() => change()}
          >
            Random Trip {randoData === true ? "On" : "Off"}
          </button>
          <p className="se">{randoData === true ? "Trip Start" : null}</p>
          {onOff()}
          <p className="se">{randoData === true ? "Trip End" : null}</p>
          {onOff()}
        </div>
      </div>
    </Container>
  );
}
