import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidData } from '../utils/validate'

const Login = () => {

    const [isSignInForm, setIsSignInForm] = useState(true)

    const [errorMessage, setErrorMessage] = useState(null)

    const email = useRef(null)
    const password = useRef(null)


    const handlebuttonClick = (e) => {
        e.preventDefault()

        const message = checkValidData(email.current.value, password.current.value)
        setErrorMessage(message)
    }

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }

    return (
        <div className='w-screen h-screen overflow-hidden'>
            <Header />
            <div className='absolute'>
                <img alt='banner' src='https://assets.nflxext.com/ffe/siteui/vlv3/058eee37-6c24-403a-95bd-7d85d3260ae1/e10ba8a6-b96a-4308-bee4-76fab1ebd6ca/IN-en-20240422-POP_SIGNUP_TWO_WEEKS-perspective_WEB_db9348f2-4d68-4934-b495-6d9d1be5917e_large.jpg' className='w-screen h-screen' />
            </div>

            <form className='p-12 absolute w-3/12 mt-36 mx-auto right-0 left-0 bg-black text-white bg-opacity-85'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? 'Sign In' : 'Sign Up'}</h1>

                {
                    !isSignInForm ? <input type='text' placeholder='Name' className={`p-4 w-full my-4 bg-gray-600`} /> : null
                }

                <input type='text' ref={email} placeholder='Email address' className='p-4 w-full my-4 bg-gray-600' />

                <input type='password' ref={password} placeholder='Password' className='p-4 my-4 w-full bg-gray-600' />

                <p className='text-red-500'>{errorMessage}</p>

                <button className='p-4 my-6 bg-red-700 w-full' onClick={handlebuttonClick} >{isSignInForm ? 'Sign In' : 'Sign Up'}</button>

                <p className='font-semibold py-4 cursor-pointer' onClick={toggleSignInForm}>{isSignInForm ? 'New to Netflix Sign Up Now' : 'Already a user? login'}</p>
            </form>

        </div>
    )
}

export default Login