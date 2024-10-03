import Button from "../components/Button";
import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Logo from "../components/Logo";
import { InputNumber } from "primereact/inputnumber";
import { useNavigate } from "react-router-dom";

function Questions17() {
  const navigate = useNavigate();
  const [insuranceAmount, setInsuranceAmount] = useState("");
  useEffect(() => {
    const storedValue = localStorage.getItem("insuranceAmount");
    if (storedValue !== null) {
      setInsuranceAmount(storedValue);
    }
  }, []);

  const handleChange = (e) => {
    setInsuranceAmount(e.value);
  };

  const handleNext = () => {
    const InsuranceAmount = insuranceAmount !== null && insuranceAmount !== 0 ?  insuranceAmount :"";

    localStorage.setItem("insuranceAmount", InsuranceAmount);
    navigate("/questions18");
  };

  // Set the input value to "0" if it's null, empty, or undefined
  const inputValue = insuranceAmount || "0";

  return (
    <div>
      <Logo />
      <div className="w-100 d-flex justify-content-center">
        <div>
          <Heading p="Use information from your Tax return." />
          <div className="d-flex justify-content-center flex-column align-items-center">
            <h3 className="fw-bold mt-4 mb-1">Monthly Insurance</h3>
            <p className="text-muted text-center fs-6 mb-3"><span style={{ color: "red" }}>Note:</span> Get this information from most recent <br /> mortgage statement or Insurance Bill</p>
            <div className="input-div w-100 d-flex justify-content-start border align-items-center px-3">
              <img src="/$.svg" width="15px" height="15px" className="" alt="" />
              <InputNumber
                type="text"
                className="input py-1 w-100"
                placeholder="Enter amount of Monthly Insurance"
                value={insuranceAmount}
                onValueChange={handleChange}
                locale="en-us"
                minFractionDigits={2}
              />
            </div>
            <p className="text-muted fs-6 text-start mt-3"><span style={{ color: "red" }}>*</span>Click next if you want to leave blank</p>
            <div className="mt-5 d-flex gap-3">
              <Button text="Back" handleClick={() => { navigate(-1) }} btnStyle="btn-back" />
              <div onClick={handleNext}>
                <Button text="Next" btnStyle="btn-next" />
              </div>
            </div>
          </div>
        </div>
      </div> 
      <img className="position-absolute rectangle-bottom" src="./RectangleBottom.png" height='300px' width="300px" alt="" />
    <img className="position-absolute rectangle-img" src="./Rectangle.png" height='600px' width="300px" alt="" />

    </div>
  );
}

export default Questions17;