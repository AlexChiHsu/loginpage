import React, { useState } from 'react'
import styles from '../../styles/Login.module.css'

function Tab({ tab, setTab } : { tab: string, setTab: Function}) {
  return (
    <>
      <div className={styles.tabDiv}>
        <button className={tab === 'login' ? styles.tabFoucs : styles.tabUnFoucs} onClick={() => setTab('login')}>
          Login
          {tab === 'login' && <span className={styles.divider}></span>}
        </button>

        <button className={tab !== 'login' ? styles.tabFoucs : styles.tabUnFoucs} onClick={() => setTab('signUp')}>
          Sign Up
          {tab !== 'login' && <span className={styles.divider} />}
        </button>
      </div>
    </>
  )
}

export default Tab