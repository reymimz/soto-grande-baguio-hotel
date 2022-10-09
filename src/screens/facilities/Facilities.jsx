import React from 'react'
import CNavbar from "../../components/navbar/CNavbar"
import "./facilities.scss"
import LineTitle from '../../components/linetitle/LineTitle'
import CFlistCard from '../../components/cflistcard/CFlistCard'

const Facilities = () => {
  return (
    <>
   <CNavbar/>
      <div className="f-fac">
        <div className="f-sliders"><span></span></div>
        <LineTitle label="Soto Grande Baguio Hotel: Facilities" />
        <CFlistCard/>
      </div>      
    </>
  )
}

export default Facilities
