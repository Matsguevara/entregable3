import React from 'react'
import "./styles/ResidentForm.css"

const ResidentForm = ({handleSubmit}) => {
  return (
   
    <form className='residentForm' onSubmit={handleSubmit} >

      <div className='residentForm__container'>
        <input  className='residentForm__input' type="text" id='idLocation' placeholder='Type a location id' />
        <button className='residentForm__btn'>Search</button>
      </div>
      </form>
    
  )
}

export default ResidentForm