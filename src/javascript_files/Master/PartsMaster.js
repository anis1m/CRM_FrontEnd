import React, { useState } from "react";
import "../../css_files/Master/PartsMaster.css";
import Table from "../Homepage/Table";
import AddPartsMaster from "./AddPartsMaster";
import SearchPartsMaster from "./SearchPartsMaster";

function PartsMaster() {
  const [showaddform, setshowaddform] = useState(false);
  const [showsearchform, setshowsearchform] = useState(false);
  const tablehead = [
    "Part Id",
    "Part Name",
    "Part Description",
    "Under Group",
    "Units",
    "GST (Percentage)",
    "HSN Code",
    "Types of Supply",
    "Selling Price",
    "Weight",
    "Dimensions",
    "Packing",
    "Material of Construction (MOC)",
    "IBR Certification",
  ];
  const tabledata = [
    [
      1,
      "Laptop Screen",
      "15.6-inch HD display",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "85285100",
      "Goods",
      4500,
      "1.5 kg",
      "Length:40; Breadth:20",
      "Box",
      "Glass",
      "Yes",
    ],
    [
      2,
      "Keyboard",
      "Standard QWERTY keyboard",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "12%",
      "84716050",
      "Goods",
      1200,
      "0.8 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "No",
    ],
    [
      3,
      "Laptop Charger",
      "65W power adapter",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "85044030",
      "Goods",
      2000,
      "0.5 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "Yes",
    ],
    [
      4,
      "Laptop Battery",
      "Lithium-ion battery",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "28%",
      "85076000",
      "Goods",
      3500,
      "1.0 kg",
      "Length:40; Breadth:20",
      "Box",
      "Lithium-ion",
      "Yes",
    ],
    [
      5,
      "Cooling Pad",
      "USB-powered cooling pad",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "12%",
      "84733020",
      "Goods",
      800,
      "0.7 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "No",
    ],
    [
      6,
      "Laptop Stand",
      "Adjustable aluminum stand",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "76169990",
      "Goods",
      1000,
      "0.9 kg",
      "Length:40; Breadth:20",
      "Box",
      "Aluminum",
      "Yes",
    ],
    [
      7,
      "Laptop Bag",
      "Water-resistant laptop bag",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "12%",
      "42022220",
      "Goods",
      1500,
      "1.2 kg",
      "Length:40; Breadth:20",
      "Bag",
      "Fabric",
      "No",
    ],
    [
      8,
      "Mouse",
      "Wireless optical mouse",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "84716060",
      "Goods",
      600,
      "0.3 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "No",
    ],
    [
      9,
      "USB Hub",
      "4-port USB 3.0 hub",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "84719000",
      "Goods",
      800,
      "0.4 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "Yes",
    ],
    [
      10,
      "Webcam",
      "HD webcam with microphone",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "85258090",
      "Goods",
      2500,
      "0.5 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "Yes",
    ],
    [
      11,
      "Docking Station",
      "Universal docking station",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "84733020",
      "Goods",
      8000,
      "1.8 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "Yes",
    ],
    [
      12,
      "SSD Drive",
      "1TB internal SSD",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "84717020",
      "Goods",
      8500,
      "0.25 kg",
      "Length:40; Breadth:20",
      "Box",
      "Silicon",
      "Yes",
    ],
    [
      13,
      "RAM Module",
      "8GB DDR4 RAM",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "84733020",
      "Goods",
      4000,
      "0.2 kg",
      "Length:40; Breadth:20",
      "Box",
      "Silicon",
      "No",
    ],
    [
      14,
      "Ethernet Adapter",
      "USB to Ethernet adapter",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "85176290",
      "Goods",
      700,
      "0.4 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "No",
    ],
    [
      15,
      "Headset",
      "Wireless headset with mic",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "85183000",
      "Goods",
      3000,
      "0.6 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "Yes",
    ],
    [
      16,
      "Bluetooth Adapter",
      "USB Bluetooth 5.0 adapter",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "85176290",
      "Goods",
      500,
      "0.2 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "No",
    ],
    [
      17,
      "Graphics Card",
      "External GPU enclosure",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "28%",
      "84733020",
      "Goods",
      35000,
      "3.5 kg",
      "Length:40; Breadth:20",
      "Box",
      "Metal",
      "Yes",
    ],
    [
      18,
      "Laptop Sleeve",
      "Shockproof laptop sleeve",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "12%",
      "42029200",
      "Goods",
      1200,
      "0.8 kg",
      "Length:40; Breadth:20",
      "Bag",
      "Fabric",
      "No",
    ],
    [
      19,
      "Power Bank",
      "20000mAh power bank",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "85076000",
      "Goods",
      2500,
      "0.9 kg",
      "Length:40; Breadth:20",
      "Box",
      "Plastic",
      "Yes",
    ],
    [
      20,
      "Screen Guard",
      "Anti-glare screen protector",
      "Category:Electronics; SubCategory:Laptops",
      "Pieces",
      "18%",
      "85299090",
      "Goods",
      300,
      "0.1 kg",
      "Length:40; Breadth:20",
      "Envelope",
      "Plastic",
      "No",
    ],
  ];

  return (
    <>
      <section className="parts-master">
        <h1>Parts Master</h1>
        <blockquote className="parts-master-forms">
          <button onClick={() => setshowaddform(true)}>Add Parts Master</button>
          <button onClick={() => setshowsearchform(true)}>
            Search Parts Master
          </button>
        </blockquote>
        {showaddform && <AddPartsMaster setshowaddform={setshowaddform} />}
        {showsearchform && (
          <SearchPartsMaster setshowsearchform={setshowsearchform} />
        )}
        <Table tablehead={tablehead} tabledata={tabledata} />
      </section>
    </>
  );
}

export default PartsMaster;