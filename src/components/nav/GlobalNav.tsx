import Box from 'components/box/Box';
import Text from 'components/text/Text';
import styled from 'styled-components';
import { useModalActions } from 'atoms/modalState';
import { Modals } from 'components/modal/ModalRoot';
import { useAuth } from 'context/AuthUserContext';
import zIndexes from 'lib/styles/zIndexes';
import { colors } from 'lib/styles/theme';

export default function GlobalNav() {
  const { open } = useModalActions();
  const { signOut, authUser, loading } = useAuth();

  const { photoURL } = authUser || {};

  return (
    <NavBox
      width={1}
      display="flex"
      justifyContent="center"
      position="relative"
      zIndex={zIndexes.NavBar}
      top={0}
      left={0}
      pb="64px"
    >
      <NavFixed
        width={[1]}
        zIndex={zIndexes.NavBar}
        position="fixed"
        bg={colors.white}
        boxShadow={`0px 2px 4px ${colors.grey._100}`}
      >
        <Nav
          as="nav"
          width={[1, 1, 1, '1024px']}
          height="64px"
          mx="auto"
          px={3}
          display="flex"
          alignItems="center"
          justifyContent="space-between"
        >
          <Heading as="h1">SMG.LOG</Heading>
          {authUser && (
            <>
              <img src={photoURL} />
              <div onClick={() => signOut()}>로그아웃</div>
            </>
          )}
          {loading && <>...loading</>} {/* make skeleton here */}
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
