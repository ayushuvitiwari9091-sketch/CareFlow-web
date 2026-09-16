import React from 'react'
import './CSS/DoctorCard.css'
const DoctorCard = ({image,name,branch}) => {
  return (
    <>
    <div className="doctor-card-outer">
        <img src={image} alt="" />

        <h3>{name}</h3>

        <p>{branch}</p>
    </div>
    </>
  )
}

export default DoctorCard