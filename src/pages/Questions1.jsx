import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Heading from "../components/Heading";
import { useEffect, useState } from "react";
import { InputNumber } from "primereact/inputnumber";
import Logo from "../components/Logo";

function Questions1() {
  const navigate = useNavigate();
  const [rentValue, setRentValue] = useState("");


  useEffect(() => {
    // Retrieve the value from local storage and set it to the state
    const storedAmount = localStorage.getItem("rentAmount");
    if (storedAmount) {
      setRentValue(storedAmount);
    }
  }, []);

  const handleNext = () => {
    // Set empty input to "0" if it's null, empty, or undefined
    const rentAmount =  rentValue !== null  && rentValue !== "0" ? rentValue :"";

    // Save to local storage
    localStorage.setItem("rentAmount", rentAmount);

    // Navigate to the next page
    navigate("/questions2");
  };


  return (
    <div>
      <Logo />
      <div className="w-100 d-flex justify-content-center">
        <div>
          <Heading p="Use information from your Tax return." />
          <div className="d-flex justify-content-center flex-column align-items-center">
            <h3 className="fw-bold mt-4 mb-3">rents received</h3>
            <div className="input-div w-100 d-flex justify-content-start border align-items-center px-3 ">
              <img src="/$.svg" width="15px" height="15px" className="" alt="" />
              <InputNumber
                type="text"
                className="input py-1  w-100 "
                placeholder="Enter amount of rents"
                value={rentValue}
                onValueChange={(e) => setRentValue(e.value)}
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

export default Questions1;