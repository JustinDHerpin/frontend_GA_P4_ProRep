import React from 'react'
import { useState, useEffect } from 'react'
import { FaSignInAlt } from 'react-icons/fa'



const Login = () => {

  const [formData, setFormData] = useState({
		email: '',
		password: '',
  })

  const { email, password } = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }


  return (

      <>
        <section>
            <h1>
                <FaSignInAlt /> Login
            </h1>
            <p>Please create an account</p>
				</section>

					<section>
							<form onSubmit={onSubmit}>
									<input 
											type='text' 
											id='name' 
											name='name' 
											value={name} 
											placeholder='Please enter your name'
											onChange={onChange}
									/>
									<input 
											type='email' 
											id='email' 
											name='email' 
											value={email} 
											placeholder='Please enter your email'
											onChange={onChange}
									/>
									<input 
											type='password' 
											id='password' 
											name='password' 
											value={password} 
											placeholder='Please enter a password'
											onChange={onChange}
									/>
									<input 
											type='password' 
											id='verifyPassword' 
											name='verifyPassword' 
											value={verifyPassword} 
											placeholder='Please verify your password'
											onChange={onChange}
									/>
									<button type='submit'>Submit</button>
					
							</form>
					</section>
      </>

  )
}

export default Login