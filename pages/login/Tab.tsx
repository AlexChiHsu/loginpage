import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'

function Tab() {
  const [isLogin, setIsLogin] = useState('login');

  return (
    <>
      <div className={styles.tabDiv}>
        <button className={isLogin === 'login' ? styles.tabFoucs : styles.tabUnFoucs} onClick={() => setIsLogin('login')}>
          Login
          {isLogin === 'login' && <span className={styles.divider}></span>}
        </button>

        <button className={isLogin !== 'login' ? styles.tabFoucs : styles.tabUnFoucs} onClick={() => setIsLogin('signUp')}>
          Sign Up
          {isLogin !== 'login' && <span className={styles.divider} />}
        </button>
      </div>
    </>
  )
}

export default Tab