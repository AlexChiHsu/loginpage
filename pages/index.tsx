import type { NextPage } from 'next'
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import { login, saveSignUpData } from './api/user';
import Landing from './landing';
import routes from './route/routes';

const Home: NextPage = () => {
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [id, setId] = useState(0);
  const router = useRouter();
  const [message, setMessage] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  // useEffect(() => {
  //   if (message === 'sign up') {
  //     alert('Success');
  //     setTimeout(() => {
  //       window.location.reload();
  //     }, 300);
  //   }
  // }, [message]);
  const onSignUp = useCallback(async () => {
    const result = await saveSignUpData(userName, email, password);
    if (result.error) {
      console.log(result.error);
    } else {
      console.log('success!');
    }
  }, [email, password, userName]);

  const onLogin = useCallback(async () => {
    const result = await login(email, password);

    if (result.error) {
      console.log(result.error);
    } else {
      alert('Success');
      setTimeout(() => {
        router.replace(routes.user(result.id));
      }, 300);
    }
  }, [email, password, router])
  return (
    <>
      <Landing
        userName={userName}
        setUserName={setUserName}
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        saveSignUpData={onSignUp}
        login={onLogin}
        // message={message} 
        setMessage={setMessage} />
    </>
  )
}

export default Home
