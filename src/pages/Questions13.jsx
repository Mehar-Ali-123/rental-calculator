import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import React, { useEffect, useState } from "react";
import Heading from "../components/Heading";
import Logo from "../components/Logo";
import { InputNumber } from "primereact/inputnumber";

function Questions13() {
  const navigate = useNavigate();
  const [daysRentedValue, setDaysRentedValue] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [message, setMessage] = useState(false);
  useEffect(() => {
    const storedValue = localStorage.getItem("daysRentedAmount");
    if (storedValue !== null) {
      setDaysRentedValue(storedValue);
    }
  }, []);

  const handleNext = () => {
    if (daysRentedValue === null || daysRentedValue === "") {
      setErrorMessage("This field is required");
      setMessage(true);
    } else {
      localStorage.setItem("daysRentedAmount", daysRentedValue);
      setErrorMessage("");
      setMessage(false);
      navigate("/questions14");
    }
  };

  return (
    <div>
      <Logo />
      <div className="w-100 d-flex justify-content-center">
        <div>
          <Heading p="Use information from your Tax return." />
          <div className="d-flex justify-content-center flex-column align-items-center">
            <h3 className="fw-bold mt-4 mb-3">Number of the days rented</h3>
            <div className="input-div w-100 d-flex justify-content-start border align-items-center px-3">
              <img src="/name.png" width="20px" height="20px" className="" alt="" />
              <InputNumber
                type="text"
                className="input py-1 w-100"
                placeholder="Enter amount of number of days rented"
                value={daysRentedValue}
                onValueChange={(e) => setDaysRentedValue(e.value)}
              
              />
            </div>
           <div className="w-100 ps-3 mt-2"> {message && <div style={{ color: "red" }}>{errorMessage}</div>}</div>
            
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

export default Questions13;
