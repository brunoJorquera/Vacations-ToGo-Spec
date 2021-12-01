import React, { useState, useEffect } from "react";
import axios from "axios";

import Locations from "./Locations";
import Pages from "./Pages";
import Loading from "./Loading";

export default function Posts() {
  const [location, setLocation] = useState([]);
  const [currentPageUrl, setCurrentPageUrl] = useState(
    "https://pokeapi.co/api/v2/location?offset=0&limit=6"
  );
  const [nextPageUrl, setNextPageUrl] = useState();
  const [prevPageUrl, setPrevPageUrl] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios
      .get(currentPageUrl, {
        cancelToken: new axios.CancelToken((c) => (cancel = c)),
      })
      .then((res) => {
        setLoading(false);
        setNextPageUrl(res.data.next);
        setPrevPageUrl(res.data.previous);
        setLocation(res.data.results.map((l) => l.name));
      });

    return () => cancel();
  }, [currentPageUrl]);

  function gotoNextPage(e) {
    e.preventDefault();
    setCurrentPageUrl(nextPageUrl);
  }

  function gotoPrevPage(e) {
    e.preventDefault();
    setCurrentPageUrl(prevPageUrl);
  }

  return (
    <div id="home">
      <Pages
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      />
      {loading ? <Loading /> : <Locations location={location} />}
    </div>
  );
}
