import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Toast } from 'primereact/toast';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';  

import Button from "../components/Button";
import Logo from "../components/Logo";

const Submission = () => {
  const value = localStorage.getItem('RentalResult');
  const navigate = useNavigate();
  const refToast = useRef(null);
  const [toast, setToast] = useState(null);

  useEffect(() => {
    setToast(refToast.current);
  }, []);

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
 
    }
    if (toast) {
      toast.show({
        severity: 'success',
        summary: 'Copied',
        detail: 'Text copied to clipboard',
        life: 3000,
      });
    }
  };
  return (
    <div>
      <Logo />
      <div className=" w-100 d-flex justify-content-center">
        <div className="pb-3">
          <div className="">
            <div className="d-flex justify-content-center mb-5"><img src="./calculator.svg" alt="" /></div>
            <h3 className='fw-bold text-center'>Your Rental income is<span className="txt-secondary">$</span><span className="txt-secondary copy-amount">{value ? value : 0}</span></h3>
         </div>
          <p className='  text-center fs-6 px-3'>Please make sure that this calculation is based on your inputs</p>
          <div className="">
            <p className='fw-semibold text-center text-muted mt-5 cursor-pointer' onClick={copyText}>
              <img src="./copy.svg" alt="" /> Copy your Rental Income</p>
          </div>
         <div className="d-flex justify-content-center mt-5"> <Button text="cancel" handleClick={() => {navigate("/")
         localStorage.setItem('RentalResult',"");
      
         }} btnStyle="btn-back" /></div>
        </div>
      </div> 
      <img className="position-absolute rectangle-bottom" src="./RectangleBottom.png" height='300px' width="300px" alt="" />
    <img className="position-absolute rectangle-img" src="./Rectangle.png" height='600px' width="300px" alt="" />
    <Toast ref={refToast} />
    </div>
  );
};

export default Submission;
