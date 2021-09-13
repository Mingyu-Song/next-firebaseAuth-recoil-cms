import GlobalNav from 'components/nav/GlobalNav';
import { useAuth } from 'context/AuthUserContext';
import { useRouter } from 'next/router';

export default function Home() {
  const { authUser } = useAuth();
  const router = useRouter();

  return (
    <>
      <GlobalNav />
      <br />
      <br />
      {JSON.stringify(authUser)}
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
