import React from "react";
import "./styles/form.scss";
import icon from "../assests/Vector.png";
import starIcon from "../assests/star.png";
import emailIcon from "../assests/email.png";
import phoneIcon from "../assests/phone.png";
import locationIcon from "../assests/location.png";
import saleIcon from "../assests/sale.png";
import dateIcon from "../assests/date.png";
import optionIcon from "../assests/options.png";
import dropIcon from "../assests/dropdown.png";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
const Form = () => {
  const [leadName, setLeadName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");
  const [sale, setSale] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [options, setOptions] = useState("");
  const [product, setProduct] = useState("");
  const [note, setNote] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({
      leadName,
      email,
      phoneNumber,
      address,
      sale,
      startDate,
      options,
      product,
      note,
    });
    resetForm();
  };
  const resetForm = () => {
    setLeadName("");
    setEmail("");
    setPhoneNumber("");
    setAddress("");
    setSale("");
    setStartDate(new Date());
    setOptions("");
    setProduct("");
    setNote("");
  };
  return (
    <form className="form-cont" onSubmit={handleSubmit}>
      <div className="form-headers">
        <h3>Add new lead form</h3>
        <button>Cancel</button>
      </div>
      <div className="form-inputs-cont">
        <div className="label-cont">
          <label>Enter lead name</label>
          <img src={starIcon} height={"5px"} alt="img-not-found" />
        </div>

        <div className="text-field-cont">
          <img src={icon} height={"15px"} />
          <input
            placeholder="Enter lead name"
            value={leadName}
            onChange={(e) => setLeadName(e.target.value)}
          ></input>
        </div>
        <div className="label-cont">
          <label>Email ID</label>
          <img src={starIcon} height={"5px"} alt="img-not-found" />
        </div>
        <div className="text-field-cont">
          <img src={emailIcon} height={"15px"} alt="img-not-found" />
          <input
            placeholder="example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </div>
        <div className="label-cont">
          <label>Phone number</label>
          <img src={starIcon} height={"5px"} alt="img-not-found" />
        </div>
        <div className="text-field-cont">
          <img src={phoneIcon} height={"15px"} alt="img-not-found" />
          <input
            placeholder="+9198634588145"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></input>
        </div>
        <div className="label-cont">
          <label>Address</label>
          {/* <img src={starIcon} height={"5px"} /> */}
        </div>
        <div className="text-field-cont">
          <img src={locationIcon} height={"15px"} alt="img-not-found" />
          <input
            placeholder="Gurugram,India"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          ></input>
        </div>

        <iframe
          src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=gurugram+(test)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          style={{ border: "none", borderRadius: "5px" }}
        >
          <a href="https://www.maps.ie/population/">Find Population on Map</a>
        </iframe>
        <div className="label-cont">
          <label>Sale</label>
        </div>
        <div className="text-field-cont">
          <img src={saleIcon} height={"15px"} alt="img-not-found" />
          <input
            placeholder="50.0000"
            value={sale}
            onChange={(e) => setSale(e.target.value)}
          ></input>
        </div>
        <div className="label-cont">
          <label>Date & Time</label>
        </div>
        <div className="text-field-cont">
          <img src={dateIcon} height={"15px"} alt="img-not-found" />
          <DatePicker
            className="date-picker"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            showTimeSelect
            dateFormat="Pp"
          />
        </div>
        <div className="label-cont">
          <label>Options</label>
        </div>
        <div className="text-field-cont">
          <img src={optionIcon} height={"15px"} alt="img-not-found" />
          <input
            placeholder="select option"
            value={options}
            onChange={(e) => setOptions(e.target.value)}
          ></input>
          <img src={dropIcon} height={"15px"} alt="img-not-found" />
        </div>
        <div className="label-cont">
          <label>Product</label>
        </div>
        <div className="text-field-cont">
          <img src={optionIcon} height={"15px"} alt="img-not-found" />
          <input
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          ></input>
          <img src={dropIcon} height={"15px"} alt="img-not-found" />
        </div>
        <div className="label-cont">
          <label>Note</label>
        </div>
        <div className="text-field-cont">
          <input
            placeholder="Enter note"
            type="text"
            style={{ padding: "2em" }}
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></input>
        </div>
        <div className="button-cont">
          <button>Add Lead</button>
        </div>
      </div>
    </form>
  );
};

export default Form;
