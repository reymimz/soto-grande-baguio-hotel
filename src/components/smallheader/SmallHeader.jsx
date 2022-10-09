import React from 'react'
import "./smallheader.scss"

const SmallHeader = ({title}) => {
  return (
    <>
       <div className="sh-title">
              <span className="sh-soto">{title}</span>
        </div>
    </>
  )
}

export default SmallHeader;
