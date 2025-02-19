import React, { useEffect } from "react";
import { useState } from "react";
import "../../css_files/Master/AddCustomerMaster.css";
import CloseForm from "./CloseForm";
import axios from "axios";
import AddCustomerAddress from "./AddCustomerAddress";
import AddCustomerBoiler from "./AddCustomerBoiler";
import { toast } from "react-toastify";

function AddCustomerMaster({
  setshowaddform,
  reload,
  setReload,
  triggerupdate,
  customerupdatedata,
}) {
  const [customerData, setCustomerData] = useState({
    OrgName: triggerupdate ? customerupdatedata?.orgName : "",
    Description: triggerupdate ? customerupdatedata?.description : "",
  });

  const [customerContact, setCustomerContact] = useState({
    POC: "",
    PhoneNumber1: "",
    PhoneNumber2: "",
    PhoneNumber3: "",
  });

  const [addresscount, setaddresscount] = useState(0);
  const [customerboilercount, setCustomerBoilerCount] = useState(0);
  const [customerboilerarray, setCustomerBoilerArray] = useState([]);
  const [addresscountarray, setaddresscountarray] = useState([]);

  useEffect(() => {
    setaddresscountarray([]);
    if (addresscount > 0) {
      for (let i = 0; i < addresscount; i++) {
        setaddresscountarray((prev) => {
          const arr = [...prev];
          arr.push(i);
          return arr;
        });
      }
    }
  }, [addresscount]);

  useEffect(() => {
    setCustomerBoilerArray([]);
    if (customerboilercount > 0) {
      for (let i = 0; i < customerboilercount; i++) {
        setCustomerBoilerArray((prev) => {
          const arr = [...prev];
          arr.push(i);
          return arr;
        });
      }
    }
  }, [customerboilercount]);

  function manageaddresscount(status) {
    if (addresscount > 0) {
      if (status === "minus") {
        setaddresscount(addresscount - 1);
      } else if (status === "plus") {
        setaddresscount(addresscount + 1);
      }
    }
  }

  function managecustomerboilercount(status) {
    if (customerboilercount > 0) {
      if (status === "minus") {
        setCustomerBoilerCount(customerboilercount - 1);
      } else if (status === "plus") {
        setCustomerBoilerCount(customerboilercount + 1);
      }
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (triggerupdate) {
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/Customer/UpdateCustomerCommand`;
      axios
        .put(URL, {
          customerID: customerupdatedata.id,
          orgName: customerData.OrgName,
          description: customerData.Description,
        })
        .then((res) => {
          toast.success(res.data.message, {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((err) => {
          console.log(err);
          toast.error("Failed to Add Record", {
            position: "bottom-center",
          });
        });
    } else {
      const URL = `${process.env.REACT_APP_API_URL}/api/v1/Customer`;
      axios
        .post(URL, customerData)
        .then((response) => {
          console.log(response.data.id);
          const contacturl = `${process.env.REACT_APP_API_URL}/api/v1/ContactCentres`;
          axios
            .post(contacturl, {
              customerId: response.data.id,
              poc: customerContact.POC,
              phoneNumber1: customerContact.PhoneNumber1,
              phoneNumber2: customerContact.PhoneNumber2,
              phoneNumber3: customerContact.PhoneNumber3,
            })
            .then((res) => {
              console.log(res);
            })
            .catch((err) => {
              console.log(err);
            });
          toast.success("Record Added Successfully", {
            position: "bottom-center",
          });
          setshowaddform(false);
          setReload(!reload);
        })
        .catch((error) => {
          toast.error("Failed to Add Record", {
            position: "bottom-center",
          });
        });
    }
  }
  return (
    <form className="add-customer-master" onSubmit={handleSubmit}>
      <blockquote>
        <label>Organization/Company Name</label>
        <input
          type="text"
          placeholder="Enter Customer Name"
          onChange={(e) =>
            setCustomerData({ ...customerData, OrgName: e.target.value })
          }
          value={customerData.OrgName}
        />
      </blockquote>
      <blockquote>
        <label>Description</label>
        <input
          type="text"
          placeholder="Description"
          onChange={(e) =>
            setCustomerData({ ...customerData, Description: e.target.value })
          }
          value={customerData.Description}
        />
      </blockquote>
      {addresscount === 0 && (
        <blockquote>
          <label>
            Add Address{" "}
            <i
              class="fa-solid fa-circle-plus"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              onClick={() => setaddresscount(addresscount + 1)}
            ></i>
          </label>
        </blockquote>
      )}
      {addresscountarray.map((address, index) => (
        <AddCustomerAddress
          key={index}
          manageaddresscount={manageaddresscount}
        />
      ))}

      <p style={{ textAlign: "left" }}>Customer Contact</p>
      <blockquote>
        <label>POC</label>
        <textarea
          rows={5}
          placeholder="Enter POC"
          onChange={(e) =>
            setCustomerContact({ ...customerContact, POC: e.target.value })
          }
        ></textarea>
      </blockquote>
      <blockquote>
        <label>Phone Number 1</label>
        <input
          type="number"
          placeholder="Enter Customer Phone Number 1"
          onChange={(e) =>
            setCustomerContact({
              ...customerContact,
              PhoneNumber1: e.target.value,
            })
          }
        />
      </blockquote>
      <blockquote>
        <label>Phone Number 2</label>
        <input
          type="number"
          placeholder="Enter Customer Phone Number 2"
          onChange={(e) =>
            setCustomerContact({
              ...customerContact,
              PhoneNumber2: e.target.value,
            })
          }
        />
      </blockquote>
      <blockquote>
        <label>Phone Number 3</label>
        <input
          type="number"
          placeholder="Enter Customer Phone Number 3"
          onChange={(e) =>
            setCustomerContact({
              ...customerContact,
              PhoneNumber3: e.target.value,
            })
          }
        />
      </blockquote>
      {customerboilercount === 0 && (
        <blockquote>
          <label>
            Add Customer Boiler{" "}
            <i
              class="fa-solid fa-circle-plus"
              style={{ fontSize: "1.5rem", cursor: "pointer" }}
              onClick={() => setCustomerBoilerCount(customerboilercount + 1)}
            ></i>
          </label>
        </blockquote>
      )}
      {customerboilerarray.map((customerboiler, index) => (
        <AddCustomerBoiler
          key={index}
          managecustomerboilercount={managecustomerboilercount}
        />
      ))}
      <button type="submit">{triggerupdate ? "Update" : "Add"} </button>
      <CloseForm close={setshowaddform} />
    </form>
  );
}

export default AddCustomerMaster;
