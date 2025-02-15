import React, { useState } from "react";
import "../../css_files/Master/SearchBoilerSeriesMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";

function SearchBoilerSeriesMaster({ setshowsearchform, setsearchedtabledata }) {
  const [Id, setId] = useState(0);

  function handleSearch(e, id) {
    e.preventDefault();
    const url = `${process.env.REACT_APP_API_URL}/api/v1/BoilerSeries/GetBoilerSeriesById?id=${id}`;
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setsearchedtabledata(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  return (
    <form
      className="search-boiler-series-master-form"
      onSubmit={(e) => handleSearch(e, Id)}
    >
      <h3>
        Search Boiler-Series Master By <br />
        Entering at least One Field
      </h3>
      <blockquote>
        <label>Id</label>
        <input
          type="number"
          placeholder="Enter Boiler-Series Master Id"
          onChange={(e) => setId(e.target.value)}
        />
      </blockquote>
      <blockquote>
        <label>Series Code</label>
        <input type="text" placeholder="Enter Series Code" />
      </blockquote>
      <button type="submit">Search</button>
      <CloseForm close={setshowsearchform} />
    </form>
  );
}

export default SearchBoilerSeriesMaster;
