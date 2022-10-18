import React, { useState } from 'react'
import styles from '../../../styles/Login.module.css'

function SignUp({
  userName,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  saveSignUpData,
  setMessage,
} : {
  userName: string,
  setUserName: Function,
  email: string,  
  setEmail: Function,
  password: string,
  setPassword: Function,
  saveSignUpData: Function,
  setMessage: Function,
}) {
  const onSignUp = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    saveSignUpData(userName, email, password);
    setMessage('sign up');
  }
  return (
    <>
      <form onSubmit={onSignUp}>
        <input className={styles.input} type='text' placeholder='User name' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <input className={styles.input} type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={styles.input} type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className={styles.submit} type="submit" value="Sign Up" />
      </form>
    </>
  )
}

export default SignUp