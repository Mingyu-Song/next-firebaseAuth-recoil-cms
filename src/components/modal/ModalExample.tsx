import Box from 'components/box/Box';
import React from 'react';
import styled from 'styled-components';

export default function ModalExample() {
  return <ModalBox p={[6]}>모달 테스트</ModalBox>;
}

const ModalBox = styled(Box)`
  background-color: blue;
  width: 700px;
  height: 500px;
`;
