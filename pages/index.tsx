import type { NextPage } from 'next'
import { useEffect, useState } from 'react';
import { createPasswordHash, createRandomKey } from './api/createRandomKey';
import Landing from './landing';

async function saveSignUpData(userName: string, email: any, password: string) {
  const saltKey = await createRandomKey(8);
  const PasswordSalt = await createPasswordHash(password, saltKey);
  const data = { userName, email, password, PasswordSalt };
  const response = await fetch('/api/signUpAPI', {
    method: 'POST',
    body: JSON.stringify(data)
  })

  if (!response.ok) {
    throw new Error(response.statusText);
  }

  return await response.json();
}

async function login(email: any, password: string) {
  const data = { email, password };
  const response = await fetch('/api/loginAPI', {
    method: 'POST',
    body: JSON.stringify(data)
  })
  return await response.json();
}
const Home: NextPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  // useEffect(() => {
  //   if (message === 'sign up') {
  //     alert('Success');
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 300);
  //   }
  // }, [message]);

  return (
    <>
      <Landing
        userName={userName}
        setUserName={setUserName}
        email={email} 
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        saveSignUpData={saveSignUpData}
        login={login}
        // message={message} 
        setMessage={setMessage} />
    </>
  )
}

export default Home
