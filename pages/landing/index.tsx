import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import styles from '../../styles/Login.module.css'
import Image from 'next/image';
import Login from './login';
import SignUp from './signUp';
import Tab from './Tab';

const Landing = ({
  userName,
  setUserName,
  email,
  setEmail,
  password,
  setPassword,
  saveSignUpData,
  login,
  setMessage,
}: {
  userName: string,
  setUserName: Function,
  email: string,
  setEmail: Function,
  password: string,
  setPassword: Function,
  saveSignUpData: Function,
  login: Function,
  setMessage: Function,
}) => {
  const [tab, setTab] = useState('login');
  return (
    <>
      <div className={styles.container}>
        <Image src="/Berify.svg" alt='' width={73} height={80} />
        <Tab tab={tab} setTab={setTab} />
        {tab === 'login' && <Login email={email} setEmail={setEmail} password={password} setPassword={setPassword} login={login} />}
        {tab !== 'login' && <SignUp
          userName={userName}
          setUserName={setUserName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          saveSignUpData={saveSignUpData}
          setMessage={setMessage}
        />}
      </div>
    </>
  )
}

export default Landing;
