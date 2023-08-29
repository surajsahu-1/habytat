// Navbar.js
import React, { useState } from "react";
import { BiArrowBack } from "react-icons/bi";
import content from "../assets/country_codes.json";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [size,setSize]=useState(10)
  const [formate,setFormate] = useState("Enter Phone Number");
  const [phone,setPhone] = useState('')
  const [validate,setValidate] = useState(false);
  const [clicked,setClicked] = useState(false);


  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  let selectCode=(event)=>{
    let value=event.target.value;
    const getObj= content.find( record => record.dial_code === value)
    setFormate(getObj.mobile_validation[0].format)
    setSize(getObj.mobile_validation[0].size)
  }
  let checkValidate=()=>{
    setClicked(true)
    if(phone.length===size){
      setValidate(true)
      return;
    }
    else{
      setValidate(false)
    }
  }

  return (
    <div className={`navbar ${isOpen ? "open" : ""}`}>
      <button className="navbar-button" onClick={toggleNavbar}>
        Check mobile number validity
      </button>
      {isOpen && (
        <div className="navbar-content">
          <button className="close-button" onClick={toggleNavbar}>
            <BiArrowBack />
          </button>
          <div className="nav-items">
            <h1 className="nav-heading">Check phone number validity</h1>
            <div className="validity-box">
            <span className="phone">Phone number</span>
              <div className="validity">
                <select onChange={selectCode}>
                  {content.map((x)=>{
                    return(
                      <option value={x.dial_code} >{x.code+x.dial_code} </option>
                    )
                  })}
                </select>
                <input type="tel" placeholder={formate} value={phone} onChange={(e)=>setPhone(e.target.value)}/>
              </div>
              {clicked ? (
                validate ? (
                    <button className="btn verification-btn verified" onClick={checkValidate}> The Mobile Number is Valid</button>
                  ):(
                    <button className="btn verification-btn false" onClick={checkValidate}> The Mobile Number is not Valid</button>
                  )
              ) : (
                <button className="btn verification-btn" onClick={checkValidate}> Check for validity</button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
