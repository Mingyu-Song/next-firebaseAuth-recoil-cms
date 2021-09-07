import Box from 'components/box/Box';
import ModalRoot from 'components/modal/ModalRoot.tsx';
import Text from 'components/text/Text';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useEffect } from 'react';
import styled from 'styled-components';
import { sizes } from 'lib/styles/theme';

const Nav = () => {
  const [modal, setModal] = useState(false);

  const router = useRouter();
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
      {modal && <ModalRoot onClose={() => setModal(false)} />}
      <Heading as="h1" onClick={() => setModal(true)}>
        로그인/회원가입
      </Heading>
    </NavBox>
  );
};

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
