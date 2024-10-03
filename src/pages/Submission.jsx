import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';
import Logo from "../components/Logo";
import axios from "axios";
import Button from "../components/Button";

const Submission = () => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const refToast = useRef(null);
  const [toast, setToast] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    fetchData();
    setToast(refToast.current);
  }, []);

  const fetchData = async () => {

    const rents = localStorage.getItem('rentAmount');
    const royalities = localStorage.getItem('royalitiesAmount');
    const auto_travel = localStorage.getItem('travelAmount');
    const advertising= localStorage.getItem('advertisingAmount');
    const cleaning_maintenance = localStorage.getItem('CleaningAmount');
    const commissions = localStorage.getItem('CommissionAmount');
    const insurance = localStorage.getItem('insuranceAmount');
    const fees = localStorage.getItem('LegalAmount');
    const manage_fee = localStorage.getItem('managementFees');
    const  repairs = localStorage.getItem('repairsAmount');
    const nod_rented = localStorage.getItem('daysRentedAmount');
    const supplies = localStorage.getItem('suppliesAmount');
    const taxes = localStorage.getItem('monthlyTaxesAmount');
    const  utilities = localStorage.getItem('utilitiesAmount');
    const principal_and_interest = localStorage.getItem('monthlyPIAmount');
    const  hoa = localStorage.getItem('hoaAmount');
    const  other = localStorage.getItem('otherExpenses');
    try {
      const requestData = {
        rental_choice: "Tax Return",
        rents: rents || "0" ,
        royalities: royalities || "0" ,
        advertising: advertising || "0" ,
        auto_travel: auto_travel || "0" ,
        cleaning_maintenance: cleaning_maintenance || "0" ,
        commissions: commissions || "0" ,
        insurance:insurance || "0" ,
        fees: fees || "0" ,
        manage_fee: manage_fee || "0" ,
        repairs: repairs || "0" ,
        supplies: supplies || "0" ,
        taxes: taxes || "0" ,
        nod_rented: nod_rented || "0" ,
        utilities: utilities || "0" ,
        principal_and_interest:principal_and_interest || "0" ,
        hoa: hoa || "0",
        other: other || "0"      
      }

      console.log(requestData)

      // PUT request to update data
      const postResponse = await axios.post("https://api.oqteq.com/api/v1/rentalCalculations", requestData);
      setSelectedAmount(postResponse.data.net_rent);
      if (toast) {
        toast.show({
          severity: 'success',
          summary: 'Success',
          detail: 'Data fetched successfully',
          life: 3000,
        });
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };
  const copyText = () => {
    const copyAmountElement = document.querySelector(".copy-amount");
    if (copyAmountElement) {
      const textToCopy = copyAmountElement.textContent;
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      document.execCommand("copy");
      document.body.removeChild(textArea);
      if (toast) {
        toast.show({
          severity: 'success',
          summary: 'Copied',
          detail: 'Text copied to clipboard',
          life: 3000,
        });
      }
    }
  };

  return (
    <div>
    <Logo />

    <div className="w-100 d-flex justify-content-center">
      <div className="pb-3">
        <div className="">
          <div className="d-flex justify-content-center mb-5"><img src="./calculator.svg" alt="" /></div>
          <h3 className='fw-bold text-center'>Your Rental income is <span className="txt-secondary">$</span> <span className="txt-secondary copy-amount"> {selectedAmount}</span></h3>
       </div>
        <p className='text-center fs-6 px-3'>Please make sure that this calculation is based on your inputs</p>
        <div className="">
          <p className='fw-semibold text-center text-muted mt-5 cursor-pointer' onClick={copyText}>
            <img src="./copy.svg" alt="" /> Copy your Rental Income
          </p>
        </div>
          <div className="d-flex justify-content-center mt-5"> <Button text="cancel" handleClick={() => {navigate("/");
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
         localStorage.setItem('otherExpenses',"");}} btnStyle="btn-back" />
         </div>
        </div>
      </div> 
      <img className="position-absolute rectangle-bottom" src="./RectangleBottom.png" height='300px' width="300px" alt="" />
    <img className="position-absolute rectangle-img" src="./Rectangle.png" height='600px' width="300px" alt="" />
    <Toast ref={refToast} />

    </div>
  );
};

export default Submission;
