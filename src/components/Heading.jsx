import React from 'react'

function Heading(props) {
  return (
    <div className="pb-3">
        <div className="">
          <h2 className='fw-bold text-center'>Provide your Information</h2>
        </div>
        <p className='text-muted text-center fs-6'>{props.p}</p>
        <div className="">
          <h4 className='fw-semibold text-center'>
          {props.secondHeading}</h4>
        </div>
      </div>
  )
}

export default Heading