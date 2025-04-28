import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";

import { useParams } from "react-router";
import { useSelector } from "react-redux";
import { UpdateDetails } from "../todos/todoSlice";
const Update = ({ setdisplay }) => {
  const benificaryDetails = useSelector((state) => state.beneficiaryDetail);

  const param = useParams();

  const filterdata = benificaryDetails?.filter((Data) => Data.id === param.id);

  const [details, setDetails] = useState(filterdata);
  const [error, setError] = useState();
  const dispatch = useDispatch();
  function handleSubmit() {
    const result = validateDetails(details);
    dispatch(UpdateDetails(details));
    setError(result);
  }

  function validateDetails(details) {
    const errorDetails = {};

    if (details[0].firstName.length <= 4) {
      errorDetails.firstName = "Number of characters should be greate than 4";
    } else if (details[0].firstName.match(/\d/)) {
      errorDetails.firstName = "First Name cannot contain numbers";
    } else {
      return;
    }

    if (details[0].Country.match(/\d/)) {
      errorDetails.Country = "Country cannot contain Numbers";
    } else {
      return;
    }
    if (!details[0].pinCode.match(/^\d+$/)) {
      errorDetails.pinCode = "PinCode cannot contain string Characters";
    } else {
      return;
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
    <div className="absolute ml-[40%]">
      <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
        <legend className="fieldset-legend">Update Beneficiares Details</legend>
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
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
        <button
          className="btn"
          tabIndex="-1"
          role="button"
          aria-disabled="true"
          onClick={() => setdisplay(false)}
        >
          Cancel
        </button>
      </fieldset>
    </div>
  );
};
export default Update;
