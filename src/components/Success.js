import React from 'react'
import tick from '../assets/success.gif'
function Success() {

  return (
    <div>
        <div className='top-portion'>
            <div>
                <img src={tick} alt="success" />
            </div>
            <div>
                <h2>SUCCESS</h2>
            </div>
        </div>
        <div className='bottom-portion'>
            <div>Congratulations, your account has been successfully created.</div>
        </div>
    </div>
  )
}

export default Success