import React from 'react'
import { useState, useEffect } from 'react'
import { FaUser } from 'react-icons/fa'



const Register = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        verifyPassword: '',
    })

    const { name, email, password, verifyPassword } = formData

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
                <FaUser /> Register
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

export default Register