import React from 'react'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='text-white md:max-w-[720px] w-fit md:h-fit h-fit my-20 mx-5 mt-10 md:mx-auto md:bg-[#181818] md:my-20 rounded-2xl p-5'>
        <p>Welcome to Sociopedia, the Social Media for Sociopaths!</p>
        <form action="" className='flex flex-col py-5'>
            <div className=''>
                <input className='text-xs my-2 mx-2 md:w-[320px] w-[280px] py-2 bg-[#181818] border-2 border-slate-800 rounded px-2' placeholder='FIRST NAME' type='text' name="firstName"></input>
                <input className='text-xs my-2 mx-2 md:w-[320px] w-[280px] py-2 bg-[#181818] border-2 border-slate-800 rounded px-2' placeholder='LAST NAME' type='text' name="firstName"></input>
            </div>
            <input className='text-xs my-2 mx-2 py-2 bg-[#181818] border-2 border-slate-800 rounded px-2' placeholder='LOCATION' type="text" name="location"/>
            <input className='text-xs my-2 mx-2 h-52 py-2 bg-[#181818] border-2 border-slate-800 rounded px-2' type="file" name='cover' />
            <input className='text-xs my-2 mx-2 py-2 bg-[#181818] border-2 border-slate-800 rounded px-2' placeholder='EMAIL' type="email" name='email' />
            <input className='text-xs my-2 mx-2 py-2 bg-[#181818] border-2 border-slate-800 rounded px-2' placeholder='PASSWORD' type="password" name='password' />
            <input className='text-xs bg-[#46c0dc] md:py-2 py-1 rounded text-black font-semibold mt-2' type="submit" value="SIGN UP" />
        </form>
        <Link to={"/auth/login"}>
            <p className='text-[#46c0dc] underline text-xs'>Already have an account? Signin here.</p>
        </Link>
    </div>
  )
}

export default Signup