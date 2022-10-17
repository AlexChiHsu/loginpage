import React, { useEffect, useState } from 'react'
import Tab from './Tab'
import styles from '../../styles/Login.module.css'
import Image from 'next/image';

function Login() {
  const [text, setText] = useState('');
  return (
    <div className={styles.container}>
      <Image src="/Berify.svg" alt='' width={73} height={80} />
      <Tab />
      <form>
        <input className={styles.input} type='text' placeholder='Email or phone' value={text} onChange={(e) => setText(e.target.value)} />
        <input className={styles.input} type='password' placeholder='Password' />
        <input className={styles.submit} type="submit" value="Login" />
      </form>
      <button className={styles.button}>Forgot your password?</button>
    </div>
  )
}

export default Login