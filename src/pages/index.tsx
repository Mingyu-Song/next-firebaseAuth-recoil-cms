import GlobalNav from 'components/nav/GlobalNav';
import { useAuth } from 'context/AuthUserContext';

export default function Home() {
  const { authUser } = useAuth();

  return (
    <>
      <GlobalNav />
      <br />
      <br />
      {JSON.stringify(authUser)}
    </>
  );
}
