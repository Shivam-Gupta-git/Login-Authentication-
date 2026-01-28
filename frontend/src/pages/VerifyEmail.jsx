import React from 'react'
import { IoMdMail } from "react-icons/io";

function VerifyEmail() {
  return (
<div className="w-full min-h-screen flex items-center justify-center bg-linear-to-br from-blue-100 to-blue-300 px-4">
  <div className="bg-white w-full max-w-md p-8 rounded-3xl shadow-xl flex flex-col items-center text-center gap-4">
    

    <div className="w-16 h-16 flex items-center justify-center rounded-full bg-blue-100">
    <IoMdMail className='text-3xl text-blue-600'/>
    </div>


    <h2 className="text-2xl font-semibold text-gray-800">
      Check your email
    </h2>


    <p className="text-gray-600 text-sm leading-relaxed">
      We’ve sent a verification link to your email address.  
      Please check your inbox and click the link to activate your account.
    </p>


    <p className="text-xs text-gray-500">
      Didn’t receive the email? Check your spam folder.
    </p>
  </div>
</div>
  )
}

export default VerifyEmail