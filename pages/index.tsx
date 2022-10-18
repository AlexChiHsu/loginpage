import type { NextPage } from 'next'
import { useState } from 'react';
import Landing from './landing';

const Home: NextPage = () => {
  const [tab, setTab] = useState('login');
  return (
    <>
    <Landing />
    </>
  )
}

export default Home
