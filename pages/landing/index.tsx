import type { NextPage } from 'next'
import { useState } from 'react';
import styles from '../../styles/Login.module.css'
import Image from 'next/image';
import Login from './login';
import SignUp from './signUp';
import Tab from './Tab';

const Landing = () => {
  const [tab, setTab] = useState('login');
  return (
    <>
    <div className={styles.container}>
      <Image src="/Berify.svg" alt='' width={73} height={80} />
      <Tab tab={tab} setTab={setTab} />
      {tab === 'login' && <Login />}
      {tab !== 'login' && <SignUp />}
    </div>
    </>
  )
}

export default Landing;
