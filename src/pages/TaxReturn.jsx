import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import React from "react";
import Heading from "../components/Heading";
import Logo from "../components/Logo";
const TaxReturn = () => {
  const navigate = useNavigate();

  return (
    <div className="position-relative">
      <Logo />
      <div className=" w-100 d-flex justify-content-center">
        <div>
          <Heading p="Your data is protected using bank level security." secondHeading="Use information from your Tax return." />
          <div>
            <div className="d-flex justify-content-between  mt-5 flex-wrap mb-3">
              <div className="form-btn " onClick={() => { navigate("/questions16") }}>
                <img height='40px' width='40px' src="./clipboardcheck.svg" alt="" />
                <p className="fs-6 fw-bold mt-2  mb-0">Rental Agreement</p>
              </div>
              <div className="form-btn " onClick={() => {
                navigate("/questions1")
                localStorage.setItem('rentAmount',"");
                localStorage.setItem('royalitiesAmount',"");
                localStorage.setItem('travelAmount',"");
                localStorage.setItem('advertisingAmount',"");
                localStorage.setItem('CleaningAmount',"");
                localStorage.setItem('CommissionAmount',"");
                localStorage.setItem('insuranceAmount',"")
                localStorage.setItem('LegalAmount',"");
                localStorage.setItem('managementFees',"");
                localStorage.setItem('repairsAmount',"");
                localStorage.setItem('daysRentedAmount',"");
                localStorage.setItem('suppliesAmount',"");
                localStorage.setItem('monthlyTaxesAmount',"");
                localStorage.setItem('utilitiesAmount',"");
                localStorage.setItem('monthlyPIAmount',"");
                localStorage.setItem('hoaAmount',"");
                localStorage.setItem('otherExpenses',"");

              }}>
                <img height='40px' width='40px' src="./buildingbank.svg" alt="" />
                <p className="fs-6 fw-bold mt-2  mb-0">Tax Return</p>
              </div>
            </div>
          </div>

          <div className="d-flex justify-content-center  ">
            <p className=" fs-5 text-muted ps-4 w-100 mt-5 ">Tax return is required if the property was owned <br /> last year and tax return was supposed to be <br /> filed for the property</p>
          </div>
        </div>
      </div>

      <img className="position-absolute rectangle-bottom" src="./RectangleBottom.png" height='300px' width="300px" alt="" />
      <img className="position-absolute rectangle-img" src="./Rectangle.png" height='600px' width="300px" alt="" />

    </div>
  );
};

export default TaxReturn;
