import { useModalValue } from 'atoms/modalState';
import RootPortal from 'components/portal';
import zIndexes from 'lib/styles/zIndexes';
import React from 'react';
import styled from 'styled-components';
import dynamic from 'next/dynamic';

export const Modals = {
  modalLogin: dynamic(() => import('./ModalLogin')),
  modalExample: dynamic(() => import('./ModalExample')),
};

export default function ModalRoot({ onClose }) {
  const { Component, visible, ...restProps } = useModalValue();

  if (!visible) return null;
  return (
    <RootPortal>
      <ModalRootBox>
        <Background />
        <ModalWrapper>
          <Component {...restProps} />
        </ModalWrapper>
      </ModalRootBox>
    </RootPortal>
  );
}

const ModalRootBox = styled.div`
  position: fixed;
  z-index: ${zIndexes.ModalRoot};
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = styled.div`
  position: absolute;
  z-index: ${zIndexes.ModalBackground};
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  opacity: 0.7;
  background-color: ${({ theme }) => theme.colors.grey._50};
  filter: blur(10px);
`;
const ModalWrapper = styled.div`
  z-index: ${zIndexes.ModalLayer};
`;
