import React, { useEffect, useState } from 'react'
import styles from '../../../styles/Login.module.css'

function Login({
  email,
  setEmail,
  password,
  setPassword,
  login,
} : {
  email: string,  
  setEmail: Function,
  password: string,
  setPassword: Function,
  login: Function,
}) {

  const onLogin = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    login(email, password);
  }
  return (
    <>
      <form onSubmit={onLogin}>
        <input className={styles.input} type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={styles.input} type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className={styles.submit} type="submit" value="Login" />
      </form>
      <button className={styles.button}>Forgot your password?</button>
      <button className={styles.button}>{}</button>
    </>
  )
}

export default Login