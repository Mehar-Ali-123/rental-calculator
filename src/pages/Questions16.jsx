import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import React, { useState } from "react";
import Heading from "../components/Heading";
import { rentalAgreement } from "../apis/api";
import Logo from "../components/Logo";
import { InputNumber } from "primereact/inputnumber";

const Questions16 = () => {
  const [leaseAmount, setleaseAmount] = useState("");
  const [error, setError] = useState("");
  const [errorMessage, setErrorMessage] = useState(false);



  const navigate = useNavigate();
  const values = {
    rental_choice: "Rental Agreement",
    total_lease_income: leaseAmount
  };

  const handleChange = (e) => {
    setleaseAmount(e.target.value);
    setError("");
  };

  const handleClick = async () => {
    if (!leaseAmount) {
      setErrorMessage(true);
      setError("This field is require*");
    } else {
      await rentalAgreement(values);
      setError("");
      navigate("/submission-rental-income");
    }
  };

  return (
    <div>
      <Logo />
      <div className=" w-100 d-flex justify-content-center">
        <div>
          <Heading p="Use information from your Lease Agreement." />
          <div className="d-flex justify-content-center  flex-column align-items-center">
            <h3 className="fw-bold mt-4 mb-3">Total Lease In</h3>
            <div className="input-div w-100 d-flex justify-content-start border align-items-center px-3 ">
              <img src="/$.svg" width="15px" height="15px" className="" alt="" />
              <InputNumber
                type="text"
                className="input py-1  w-100 "
                placeholder="Enter Total Lease Income"
                value={leaseAmount}
                onValueChange={handleChange}
                locale="en-us"
                minFractionDigits={2}
              />
            </div>
           <div className="w-100 ps-3"> {errorMessage && <div style={{ color: "red" }} className=" mt-2">{error}</div>}</div>
            <div className="mt-5 d-flex gap-3">
            <Button text="Back" handleClick={() => navigate(-1)} btnStyle="btn-back" />
              <Button text="Submit" handleClick={handleClick} btnStyle="btn-submit" />
            </div>
          </div>
        </div>
      </div> 
      <img className="position-absolute rectangle-bottom" src="./RectangleBottom.png" height='300px' width="300px" alt="" />
    <img className="position-absolute rectangle-img" src="./Rectangle.png" height='600px' width="300px" alt="" />

    </div>
  );
};

export default Questions16;