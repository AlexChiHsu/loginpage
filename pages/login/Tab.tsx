import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'

function Tab() {
  const [isLogin, setIsLogin] = useState('login');

  return (
    <>
      <div className={styles.tabDiv}>
        <div>
          <button className={isLogin === 'login' ? styles.tabFoucs : styles.tabUnFoucs} onClick={() => setIsLogin('login')}>Login</button>
          {isLogin === 'login' && <span className={styles.divider}></span>}
        </div>
        <div>
          <button className={isLogin !== 'login' ? styles.tabFoucs : styles.tabUnFoucs} onClick={() => setIsLogin('signUp')}>Sign Up</button>
          {isLogin !== 'login' && <span className={styles.divider} />}
        </div>
      </div>
    </>
  )
}

export default Tab