import React from 'react'

const Subheading = ({ title }) => {
  return (
    <div style={{ marginBottom: '1rem' }}>
      <p className='p__cormorant'>{title}</p>
      <hr></hr>

    </div>
  )
}

export default Subheading