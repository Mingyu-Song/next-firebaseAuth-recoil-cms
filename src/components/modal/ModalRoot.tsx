import RootPortal from 'components/portal';
import zIndexes from 'lib/styles/zIndexes';
import React from 'react';
import styled from 'styled-components';
import ModalLogin from './ModalLogin';

export type ModalRootProps = {
  children: React.ReactNode;
};

export default function ModalRoot({ children, onClose }: ModalRootProps) {
  return (
    <RootPortal>
      <ModalRootBox>
        <Background />
        <ModalWrapper>
          <div onClick={onClose}>x</div>
          <ModalLogin /> {/* children으로 */}
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
