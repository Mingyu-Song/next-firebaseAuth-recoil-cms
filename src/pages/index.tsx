import GlobalNav from 'components/nav/GlobalNav';
import { useAuth } from 'context/AuthUserContext';
import { getPosts } from 'lib/firebase/db';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  const { authUser } = useAuth();
  const router = useRouter();

  useEffect(async () => {
    const hi = await getPosts();
    console.log(hi);
  }, []);

  return (
    <>
      <GlobalNav />
      <br />
      <br />
      {JSON.stringify({ ...authUser, token: 'private' })}
      <h5>추가할 것</h5>
      <ul>
        <li>post list page</li>
        <li>post page</li>
        <li onClick={() => router.push('write')}>write page</li>
        <li>my information page</li>
      </ul>
    </>
  );
}
