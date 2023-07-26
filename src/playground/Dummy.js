import React from 'react'
import './Dummy.css'
const Dummy = ({name, company}) => {
    let title = "This is header"
  return (
    <div className='Dummy-section'>
        <h2>dummy value {name}, {company}</h2>
    </div>
  )
}

export default Dummy