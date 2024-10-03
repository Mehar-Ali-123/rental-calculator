import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import Logo from "../components/Logo";
import { InputNumber } from "primereact/inputnumber";

function Questions10() {
  const navigate = useNavigate();
  const [suppliesAmount, setSuppliesAmount] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem("suppliesAmount");
    if (storedValue !== null) {
      setSuppliesAmount(storedValue);
    }
  }, []);

  const handleNext = () => {
    // Set empty input to "0"
    const amount = suppliesAmount !== undefined && suppliesAmount !== 0 ? suppliesAmount : "";

    // Save to local storage with function name
    localStorage.setItem("suppliesAmount", amount);

    // Navigate to the next page
    navigate("/questions11");
  };

  const handleBack = () => {
    // Set empty input to "0"
    const amount = suppliesAmount !== "" ? suppliesAmount : "0";
    // Save to local storage with function name
    localStorage.setItem("suppliesAmount", amount);

    // Navigate back
    navigate(-1);
  };

  return (
    <div>
      <Logo />
      <div className="w-100 d-flex justify-content-center">
        <div>
          <Heading p="Use information from your Tax return." />
          <div className="d-flex justify-content-center flex-column align-items-center">
            <h3 className="fw-bold mt-4 mb-3">Supplies</h3>
            <div className="input-div w-100 d-flex justify-content-start border align-items-center px-3 ">
              <img src="/$.svg" width="15px" height="15px" className="" alt="" />
              <InputNumber
                type="text"
                className="input py-1 w-100"
                placeholder="Enter amount of Supplies"
                value={suppliesAmount}
                onValueChange={(e) => setSuppliesAmount(e.value)}
                locale="en-us"
                minFractionDigits={2}
              />
            </div>
            <p className="text-muted fs-6 text-start mt-3">
              <span style={{ color: "red" }}>*</span>Click next if you want to leave blank
            </p>
            <div className="mt-5 d-flex gap-3">
              <Button text="Back" handleClick={handleBack} btnStyle="btn-back" />
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

export default Questions10;