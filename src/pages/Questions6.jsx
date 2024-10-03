
import Button from "../components/Button";
import React, { useContext, useEffect, useState } from "react";
import Heading from "../components/Heading";
import Logo from "../components/Logo";
import { InputNumber } from "primereact/inputnumber";
import { RentalContext } from "../context/RentalContext";
import { useNavigate } from "react-router-dom";

function Questions6() {
  const navigate = useNavigate();
  const [CommissionValue, setCommissionValue] = useState("");
    useEffect(() => {
    const storedAmount = localStorage.getItem("CommissionAmount");
    if (storedAmount) {
      setCommissionValue(storedAmount);
    }
  }, []);

  const handleNext = () => {
    const CommissionAmount = CommissionValue !== null && CommissionValue !== 0 ? CommissionValue : "" ;

    localStorage.setItem("CommissionAmount", CommissionAmount);

    navigate("/questions7");
  };
  return (
    <div>
      <div>
        <Logo />
        <div className=" w-100 d-flex justify-content-center">
          <div>
            <Heading p="Use information from your Tax return." />
            <div className="d-flex justify-content-center  flex-column align-items-center">
              <h3 className="fw-bold mt-4 mb-3">Commissions</h3>
              <div   className="input-div w-100 d-flex justify-content-start border align-items-center px-3 ">
                <img src="/$.svg" width="15px" height="15px" className="" alt="" />
                <InputNumber
                  type="text"
                  className="input py-1  w-100 "
                  placeholder="Enter amount of Commissions"
                  name="antecedent_year_income"
                  value={CommissionValue}
                  onValueChange={(e) => setCommissionValue(e.value)}
                  locale="en-us"
                  minFractionDigits={2}
                />
              </div>
              {/* {error && <div  style={{color:"red"}} className=" mt-2">{error}</div>} */}
              <p className="text-muted fs-6 text-start mt-3"><span style={{ color: "red" }} >*</span>Click next if want to leave blank</p>
              <div className="mt-5 d-flex gap-3">
                <Button text="Back" handleClick={() => { navigate(-1) }} btnStyle="btn-back" />
                <div onClick={handleNext}>
                  <Button text="Next"   btnStyle="btn-next" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <img className="position-absolute rectangle-bottom" src="./RectangleBottom.png" height='300px' width="300px" alt="" />
    <img className="position-absolute rectangle-img" src="./Rectangle.png" height='600px' width="300px" alt="" />

    </div>
  )
}

export default Questions6