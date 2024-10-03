import Button from "../components/Button";
import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Logo from "../components/Logo";
import { InputNumber } from "primereact/inputnumber";
import { useNavigate } from "react-router-dom";

function Questions14() {
  const navigate = useNavigate();
  const [monthlyPIValue, setMonthlyPIValue] = useState("");
  useEffect(() => {
    const storedValue = localStorage.getItem("monthlyPIAmount");
    if (storedValue !== null) {
      setMonthlyPIValue(storedValue);
    }
  }, []);
  const handleNext = () => {
    const valueToStore = monthlyPIValue !== null && monthlyPIValue !== 0 ? monthlyPIValue : "";

    localStorage.setItem("monthlyPIAmount", valueToStore);
    navigate("/questions15");
  };

  return (
    <div>
      <Logo />
      <div className="w-100 d-flex justify-content-center">
        <div>
          <Heading p="Use information from your Tax return." />
          <div className="d-flex justify-content-center flex-column align-items-center">
            <h3 className="fw-bold mt-4 mb-1">Monthly P & I</h3>
            <p className="text-muted text-center fs-6 text-start mb-3">
              <span style={{ color: "red" }}>Note:</span> Get this information from most recent
              <br /> mortgage statement,
            </p>
            <div className="input-div w-100 d-flex justify-content-start border align-items-center px-3">
              <img src="/$.svg" width="15px" height="15px" className="" alt="" />
              <InputNumber
                type="text"
                className="input py-1 w-100"
                placeholder="Enter amount of Monthly P & I"
                value={monthlyPIValue}
                onValueChange={(e) => setMonthlyPIValue(e.value)}
                locale="en-us"
                minFractionDigits={2}
              />
            </div>
            <p className="text-muted fs-6 text-start mt-3">
              <span style={{ color: "red" }}>*</span>Click next if you want to leave blank
            </p>
            <div className="mt-5 d-flex gap-3">
              <Button text="Back" handleClick={() => navigate(-1)} btnStyle="btn-back" />
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

export default Questions14;