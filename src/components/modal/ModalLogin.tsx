import Box from 'components/box/Box';
import React from 'react';
import styled from 'styled-components';

export type ModalLoginProps = {};

export default function ModalLogin({}: ModalLoginProps) {
  return <ModalLoginBox p={[6]}>dsadas</ModalLoginBox>;
}

const ModalLoginBox = styled(Box)`
  background-color: red;
  width: 700px;
  height: 500px;
`;
