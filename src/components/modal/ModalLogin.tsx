import Box from 'components/box/Box';
import useFirebaseAuth from 'lib/firebase/useFirebaseAuth';
import { colors } from 'lib/styles/theme';
import React, { useEffect } from 'react';
import styled from 'styled-components';

export type ModalLoginProps = {};

export default function ModalLogin({ handleClose }: ModalLoginProps) {
  const { signWithGoogle, authUser } = useFirebaseAuth();

  useEffect(() => {
    if (authUser) {
      handleClose();
    }
  }, [authUser]);

  return (
    <ModalLoginBox bg={colors.white} width="700px" height="500px" p={[6]}>
      <p onClick={() => handleClose()}>X</p>
      <div onClick={() => signWithGoogle()}>구글로 로그인</div>
    </ModalLoginBox>
  );
}

const ModalLoginBox = styled(Box)`
  div {
    border-radius: 50px;
    width: 200px;
    height: 40px;
    background-color: ${colors.white};
    box-shadow: 0px 2px 4px ${colors.grey._300};
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
