import React, { useState, useEffect } from "react";
import "../../css_files/Master/BoilerMaster.css";
import Table from "../Homepage/Table";
import AddBoilerMaster from "./AddBoilerMaster";
import SearchBoilerMaster from "./SearchBoilerMaster";
import axios from "axios";
import { ToastContainer } from "react-toastify";

function BoilerMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = ["Id", "Head", "Description"];
  const [tabledata, setTableData] = useState([]);
  const [reload, setReload] = useState(false);
  const [triggerupdate, settriggerupdate] = useState(false);
  const [hsnupdatedata, sethsnupdatedata] = useState([]);

  function setsearchedtabledata(tabledata) {
    setTableData([]);
    const tablearr = [];
    tablearr.push(tabledata.id);
    tablearr.push(tabledata.hsnCode);
    tablearr.push(tabledata.description);
    setTableData((prev) => {
      const arr = [...prev];
      arr.push(tablearr);
      return arr;
    });
    setshowsearchform(false);
  }

  useEffect(() => {
    setTableData([]);
    const URL = `${process.env.REACT_APP_API_URL}/api/v1/Boiler`;
    axios
      .get(URL)
      .then((response) => {
        console.log(response.data);
        for (let i = 0; i < response.data.length; i++) {
          const data = [];
          data.push(response.data[i].id);
          data.push(response.data[i].head);
          data.push(response.data[i].description);
          setTableData((prev) => {
            const arr = [...prev];
            arr.push(data);
            return arr;
          });
        }
      })
      .catch((error) => {
        console.error("Error fetching boiler data:", error);
      });
  }, [reload]);

  return (
    <>
      <section className="boiler-master">
        <ToastContainer />
        <h1>Boiler Master</h1>
        <blockquote className="boiler-master-forms">
          <button onClick={() => setshowaddform(true)}>
            Add Boiler Master
          </button>
          <button onClick={() => setshowsearchform(true)}>
            Search Boiler Master
          </button>
        </blockquote>
        {showaddform && (
          <AddBoilerMaster
            setshowaddform={setshowaddform}
            reload={reload}
            setReload={setReload}
          />
        )}
        {showsearchform && (
          <SearchBoilerMaster
            setshowsearchform={setshowsearchform}
            setsearchedtabledata={setsearchedtabledata}
          />
        )}
        <Table
          tablehead={tablehead}
          tabledata={tabledata}
          url="Boiler/DeleteBoiler"
          reload={reload}
          setReload={setReload}
        />
      </section>
    </>
  );
}

export default BoilerMaster;
