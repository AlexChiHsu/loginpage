import React, { useState } from 'react'
import styles from '../../../styles/Login.module.css'

function SignUp() {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function saveSignUpData(userName: string, email: any, password: string) {
    const data = { userName, email, password };
    const response = await fetch('/api/loginAPI', {
      method: 'POST',
      body: JSON.stringify(data)
    })

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }
  return (
    <>
      <form onSubmit={() => { saveSignUpData(userName, email, password); }}>
        <input className={styles.input} type='text' placeholder='User name' value={userName} onChange={(e) => setUserName(e.target.value)} />
        <input className={styles.input} type='text' placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        <input className={styles.input} type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        <input className={styles.submit} type="submit" value="Sign Up" />
      </form>
    </>
  )
}

export default SignUp