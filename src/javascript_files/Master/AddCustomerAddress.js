import React, { useState } from "react";
import "../../css_files/Master/AddCustomerAddress.css";

function AddCustomerAddress({ manageaddresscount }) {
  const [customerAddressData, setCustomerAddressData] = useState({
    Area: "",
    City: "",
    Pincode: "",
    State: "",
  });

  return (
    <div className="add-customer-address">
      <blockquote style={{ flexDirection: "row", alignItems: "center" }}>
        <p>Customer Address</p>
        <button
          type="button"
          style={{ marginLeft: "auto" }}
          onClick={() => manageaddresscount("minus")}
        >
          <i class="fa-solid fa-circle-minus"></i>
        </button>
        <button type="button" onClick={() => manageaddresscount("plus")}>
          <i class="fa-solid fa-circle-plus"></i>
        </button>
      </blockquote>
      <blockquote>
        <label>Area</label>
        <input
          type="text"
          placeholder="Enter Area"
          onChange={(e) =>
            setCustomerAddressData({
              ...customerAddressData,
              Area: e.target.value,
            })
          }
        />
      </blockquote>
      <aside>
        <blockquote>
          <label>City</label>
          <input
            type="text"
            placeholder="Enter City"
            onChange={(e) =>
              setCustomerAddressData({
                ...customerAddressData,
                City: e.target.value,
              })
            }
          />
        </blockquote>
        <blockquote>
          <label>Pincode</label>
          <input
            type="number"
            placeholder="Enter Pin Code"
            onChange={(e) =>
              setCustomerAddressData({
                ...customerAddressData,
                Pincode: e.target.value,
              })
            }
          />
        </blockquote>
      </aside>
      <blockquote>
        <label>State</label>
        <input
          type="text"
          placeholder="Enter State"
          onChange={(e) =>
            setCustomerAddressData({
              ...customerAddressData,
              State: e.target.value,
            })
          }
        />
      </blockquote>
    </div>
  );
}

export default AddCustomerAddress;
