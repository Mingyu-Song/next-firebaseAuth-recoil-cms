import Box from 'components/box/Box';
import useFirebaseAuth from 'lib/firebase/useFirebaseAuth';
import React from 'react';
import styled from 'styled-components';

export type ModalLoginProps = {};

export default function ModalLogin({ onClose }: ModalLoginProps) {
  const { signWithGoogle } = useFirebaseAuth();
  return (
    <ModalLoginBox p={[6]}>
      <div onClick={() => signWithGoogle()}>로그인</div>
      dsadas
    </ModalLoginBox>
  );
}

const ModalLoginBox = styled(Box)`
  background-color: lightcoral;
  width: 700px;
  height: 500px;
`;
