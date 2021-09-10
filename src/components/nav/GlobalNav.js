import Box from 'components/box/Box';
import Text from 'components/text/Text';
import styled from 'styled-components';
import { useModalActions } from 'atoms/modalState';
import { Modals } from 'components/modal/ModalRoot';
import { useAuth } from 'context/AuthUserContext';
import zIndexes from 'lib/styles/zIndexes';

function GlobalNav() {
  const { open } = useModalActions();
  const { signOut, ...rest } = useAuth();
  console.log(rest);

  return (
    <NavBox
      as="div"
      width={1}
      position="fixed"
      zIndex={zIndexes.NavBar}
      top={0}
      left={0}
    >
      <Nav
        as="nav"
        width={[1, 1, 1, '1024px']}
        px={3}
        mx="auto"
        display="flex"
        justifyContent="space-between"
      >
        <Heading
          as="h1"
          onClick={() =>
            open(Modals.modalLogin, { onClose: () => console.log('hi') })
          }
        >
          SMG.LOG
        </Heading>
        <div onClick={() => signOut()}>로그아웃</div>
      </Nav>
    </NavBox>
  );
}

export default GlobalNav;

const Heading = Text;

const Nav = styled(Box)``;
const NavBox = styled(Box)`
  transition: all 0.2s ease-in-out;
  will-change: all;
  h1 {
    transition: all 0.1s ease-in-out;
    will-change: all;
  }
`;
