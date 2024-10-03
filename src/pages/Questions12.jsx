import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import React, { useState, useEffect } from "react";
import Heading from "../components/Heading";
import Logo from "../components/Logo";
import { InputNumber } from "primereact/inputnumber";
import { InputTextarea } from 'primereact/inputtextarea';
        
function Questions12() {
  const navigate = useNavigate();
  const [otherExpenses, setOtherExpenses] = useState("");

  useEffect(() => {
    const storedValue = localStorage.getItem("otherExpenses");
    if (storedValue !== null) {
      setOtherExpenses(storedValue);
    }
  }, []);

  const handleNext = () => {
    // Set empty input to "0"
    const amount = otherExpenses !== null && otherExpenses !== 0 ? otherExpenses : "";

    // Save to local storage with function name
    localStorage.setItem("otherExpenses", amount);

    // Navigate to the next page
    navigate("/questions13");
  };

  return (
    <div>
      <Logo />
      <div className="w-100 d-flex justify-content-center">
        <div>
          <Heading p="Use information from your Tax return." />
          <div className="d-flex justify-content-center flex-column align-items-center">
            <h3 className="fw-bold mt-4 mb-1">Other (if any)</h3>
            <p className="text-muted fs-6 text-start mb-3">
              <span style={{ color: "red" }}>Note:</span> Do not include HOA
            </p>
            <div className="input-div w-100 d-flex justify-content-start border align-items-center px-3 ">
              <img src="/$.svg" width="15px" height="15px" className="" alt="" />
              <InputNumber
                type="text"
                className="input py-1  w-100 "
                placeholder="List the other expenses"
                value={otherExpenses}
                onValueChange={(e) => setOtherExpenses(e.value)}
                locale="en-us"
                minFractionDigits={2}
              />
              {/* <InputTextarea
              className=" py-5  w-100 "
              value={otherExpenses}
              onValueChange={(e) => setOtherExpenses(e.value)}
               rows={5} cols={30} 
               /> */}

            </div>
            <p className="text-muted fs-6 text-start mt-3">
              <span style={{ color: "red" }}>*</span>Click next if you want to leave blank
            </p>
            <div className="mt-5 d-flex gap-3 mb-3">
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

export default Questions12;