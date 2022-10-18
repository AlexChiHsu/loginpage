import React, { useEffect, useState } from 'react'
import styles from '../../../styles/Login.module.css'

function Login() {
  const [text, setText] = useState('');

  return (
    <>
      <form>
        <input className={styles.input} type='text' placeholder='Email or phone' value={text} onChange={(e) => setText(e.target.value)} />
        <input className={styles.input} type='password' placeholder='Password' />
        <input className={styles.submit} type="submit" value="Login" />
      </form>
      <button className={styles.button}>Forgot your password?</button>
      <button className={styles.button}>{}</button>
    </>
  )
}

export default Login