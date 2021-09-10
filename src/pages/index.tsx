import GlobalNav from 'components/nav/GlobalNav';
import { useAuth } from 'context/AuthUserContext';
import styled from 'styled-components';

export default function Home() {
  const { authUser } = useAuth();

  return (
    <>
      {/* <GlobalNav /> */}
      <Hi>asda</Hi>
      <br />
      <br />
      {JSON.stringify(authUser)}
    </>
  );
}
const Hi = styled.div``;
