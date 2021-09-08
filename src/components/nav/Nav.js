import Box from 'components/box/Box';
import Text from 'components/text/Text';
import styled from 'styled-components';
import { useModalActions } from 'atoms/modalState';
import { Modals } from 'components/modal/ModalRoot';

function Nav() {
  const { open } = useModalActions();

  return (
    <NavBox
      as="nav"
      display="flex"
      position="fixed"
      zIndex="0"
      width="100%"
      top={0}
      left={0}
    >
      <Heading
        as="h1"
        onClick={() =>
          open(Modals.modalLogin, { onClose: () => console.log('hi') })
        }
      >
        로그인/회원가입
      </Heading>
    </NavBox>
  );
}

export default Nav;

const Heading = Text;

const NavBox = styled(Box)`
  transition: all 0.2s ease-in-out;
  will-change: all;
  h1 {
    transition: all 0.1s ease-in-out;
    will-change: all;
  }
`;
