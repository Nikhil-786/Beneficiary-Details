import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addDetails } from "../todos/todoSlice";
const AddBeneficiary = ({setdisplay }) => {
  const [details, setDetails] = useState({
    firstName: "",
    Address: "",
    Country: "",
    pinCode: "",
  });
  
  const [error, setError] = useState();
 const dispatch = useDispatch();
  function handleSubmit() {
    const result = validateDetails(details);
   
    if (Object.keys(result).length === 0) {
      
      dispatch(addDetails(details));
      //getDetails(preDetail=>[...preDetail,details]);
    } else {
      setError(result);
    }
  }

  function validateDetails(details) {
    const errorDetails = {};
    console.log(typeof details.firstName.length);
    if (!details.firstName) {
      errorDetails.firstName = "Field Required";
    } else if (details.firstName.length <= 4) {
      errorDetails.firstName = "Number of characters should be greate than 4";
    } else if (details.firstName.match(/\d/)) {
      errorDetails.firstName = "First Name cannot contain numbers";
    }
    if (!details.Address) {
      errorDetails.Address = "Field Required";
    }
    if (!details.Country) {
      errorDetails.Country = "Field Required";
    } else if (details.Country.match(/\d/)) {
      errorDetails.Country = "Country cannot contain Numbers";
    }
    if (!details.pinCode) {
      errorDetails.pinCode = "Field Required";
    } else if (!details.pinCode.match(/^\d+$/)) {
      errorDetails.pinCode = "PinCode cannot contain string Characters";
    }

    return errorDetails;
  }

  function handleChange(e) {
    setDetails((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
    setError((prev) => ({
      ...prev,
      [e.target.name]: "",
    }));
  }

  return (
    <div className="absolute ml-[40%]  mt-[-8%]">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Beneficiares Details</legend>
        <label className="label">FullName*</label>
        <input
          type="text"
          className="input"
          placeholder="FullName"
          name="firstName"
          value={details.firstName}
          onChange={handleChange}
        />
        <label className="label text-blue-400">
          {error ? (
            <span className="text-red-600">{error.firstName}</span>
          ) : (
            "FullName should be greater than 4 characters and no numbers allowed"
          )}
        </label>
        <label className="label">Address*</label>
        <input
          type="text"
          className="input"
          placeholder="Address"
          name="Address"
          value={details.Address}
          onChange={handleChange}
        />
        <label className="label text-blue-400">
          {error ? (
            <span className="text-red-600">{error.Address}</span>
          ) : (
            "Provide Valid Address"
          )}
        </label>
        <label className="label">Country*</label>
        <input
          type="text"
          className="input"
          placeholder="Country"
          name="Country"
          value={details.Country}
          onChange={handleChange}
        />
        <label className="label text-blue-400">
          {error ? (
            <span className="text-red-600">{error.Country}</span>
          ) : (
            "Provide Valid Country details"
          )}
        </label>
        <label className="label">PinCode*</label>
        <input
          type="text"
          className="input"
          placeholder="401303"
          name="pinCode"
          value={details.pinCode}
          onChange={handleChange}
        />
        <label className="label text-blue-400">
          {error ? (
            <span className=" text-red-600">{error.pinCode}</span>
          ) : (
            "Pincode should only contain Number"
          )}
        </label>
        <button className="btn" onClick={handleSubmit} >
          Submit
        </button>
        <button
          className="btn"
          tabIndex="-1"
          role="button"
          aria-disabled="true"
        onClick={()=>setdisplay(false)}
        >
          Cancel
        </button>
      </fieldset>
    </div>
  );
};
export default AddBeneficiary;
