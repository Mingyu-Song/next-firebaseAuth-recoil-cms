import Box from 'components/box/Box';
import Text from 'components/text/Text';
import styled from 'styled-components';
import { useModalActions } from 'atoms/modalState';
import { Modals } from 'components/modal/ModalRoot';
import { useAuth } from 'context/AuthUserContext';
import zIndexes from 'lib/styles/zIndexes';
import { breakpoints, colors } from 'lib/styles/theme';

export default function GlobalNav() {
  const { open } = useModalActions();
  const { signOut, authUser, loading } = useAuth();

  const { photoURL, displayName } = authUser || {};

  return (
    <NavBox
      display="flex"
      justifyContent="center"
      position="relative"
      zIndex={zIndexes.NavBar}
      top={0}
      left={0}
      pb="64px"
    >
      <NavFixed
        width="100%"
        zIndex={zIndexes.NavBar}
        position="fixed"
        bg={colors.white}
        boxShadow={`0px 2px 4px ${colors.grey._100}`}
      >
        <Nav
          as="nav"
          // width={[1, 1, 1, '1024px']}
          // width={[1, 1, 1, '1024px']}
          maxWidth={2}
          height="64px"
          mx="auto"
          px={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading as="h1">SMG.LOG</Heading>
          {authUser && (
            <UserBox>
              <img src={photoURL} />
              <div onClick={() => signOut()}>{`${displayName}님`}</div>
            </UserBox>
          )}
          {!authUser && (
            <div
              onClick={() =>
                open(Modals.modalLogin, { onClose: () => console.log('hi') })
              }
            >
              로그인
            </div>
          )}
        </Nav>
      </NavFixed>
    </NavBox>
  );
}

const Heading = Text;

const UserBox = styled(Box)`
  display: flex;
  align-items: center;
  img {
    border-radius: 50%;
    display: block;
    width: 36px;
    height: 36px;
    box-shadow: 0px 2px 4px ${colors.grey._400};
  }
`;
const NavFixed = styled(Box)``;
const Nav = styled(Box)``;
const NavBox = styled(Box)`
  transition: all 0.2s ease-in-out;
  will-change: all;
  h1 {
    transition: all 0.1s ease-in-out;
    will-change: all;
  }
`;
