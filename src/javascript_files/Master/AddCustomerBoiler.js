import React, { useState, useEffect } from "react";
import axios from "axios";

function AddCustomerBoiler({ managecustomerboilercount }) {
  const [boilerData, setBoilerData] = useState([]);
  useEffect(() => {
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Boiler`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        setBoilerData(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  function fetchboilerseries() {}
  return (
    <div className="add-customer-address">
      <blockquote style={{ flexDirection: "row", alignItems: "center" }}>
        <p>Customer Boiler</p>
        <button
          type="button"
          style={{ marginLeft: "auto" }}
          onClick={() => managecustomerboilercount("minus")}
        >
          <i class="fa-solid fa-circle-minus"></i>
        </button>
        <button type="button" onClick={() => managecustomerboilercount("plus")}>
          <i class="fa-solid fa-circle-plus"></i>
        </button>
      </blockquote>
      <blockquote>
        <label>Boiler Head</label>
        <select>
          <option value="">Select Boiler Head</option>
          {boilerData.map((boiler, index) => (
            <option key={index} value={boiler.head}>
              {boiler.head}
            </option>
          ))}
        </select>
      </blockquote>
      <blockquote>
        <label>Boiler Series</label>
        <select>
          <option value="">Select Boiler Series</option>
        </select>
      </blockquote>
    </div>
  );
}

export default AddCustomerBoiler;
