import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
    <div className='text-white max-w-[720px] md:h-72 h-[400px] mx-10 md:mx-auto bg-[#181818] mt-20 rounded-2xl p-5 flex flex-col justify-center'>
        <p>Welcome to Sociopedia, the Social Media for Sociopaths!</p>
        <form action="" className='flex flex-col py-5'>
            <input className='py-2 my-2 bg-[#181818] border-2 border-slate-800 rounded px-5' placeholder='Email' type='email' name='email'></input>
            <input className='py-2 my-2 bg-[#181818] border-2 border-slate-800 rounded px-5' placeholder='Password' type='password' name='password'></input>
            <input className='bg-[#46c0dc] py-2 rounded text-black font-semibold mt-2' type='submit' value="LOGIN"></input>
        </form>
        <Link to={"/auth/signup"}>
        <p className='text-[#46c0dc] underline text-xs'>Dont have an account? Signup here.</p>
        </Link>
    </div>
  )
}

export default Signin