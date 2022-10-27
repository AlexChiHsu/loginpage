import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import styles from '../../styles/Login.module.css'
import { user } from '../api/user';

const User = () => {
  const router = useRouter();
  const { id } = router.query as { id: string };
  const [userName, setUserName] = useState('');

  const userData = useCallback(async () => {
    const result = await user(parseInt(id, 10));

    if (result.error) {
      console.log(result.error);
    } else {
      console.log('Success');
      setUserName(result.userName);
    }
  }, [id])

  useEffect(() => {
    userData();
  }, []);

  return (
    <>
      <div className={styles.container}>
        <h1>Hello {userName}</h1>
      </div>
    </>
  )
}

export default User;
