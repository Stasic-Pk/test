import react, { useState } from 'react'

export function Registration() {
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const [emailDirty, setEmailDirty] = useState()
  const [passwordDirty, setPasswordDirty] = useState()
  const [emailError, setEmailError] = useState('email not found')
  const [passwordError, setPasswordError] = useState('password not found')

  const blurHandler = (e: any) => {
    switch (e.target.name) {
      case 'email':
        setEmailDirty(true)
        break
      case 'password':
        setPasswordDirty(true)
        break
    }
  }

  function emailInput() {
    return (
      {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
      <input value={'email'} onBlur={e => blurHandler(e)} name='email' className="input" type="text" placeholder="Email" />
    )
  }
  function passwordInput() {
    return (
      <input value={'password'} onBlur={e => blurHandler(e)} name='password' className="input" type="text" placeholder="Password" />
    )
  }

  return (
    <div></div>
  )
}
