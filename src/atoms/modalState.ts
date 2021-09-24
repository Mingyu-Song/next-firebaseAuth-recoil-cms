import { useMemo } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const defaultModalState = {
  visible: false,
  Component: () => null,
  title: '',
  message: '',
  confirmText: 'OK',
  cancelText: 'CANCEL',
  onConfirm() {},
  onClose: null,
  props: {},
};

const modalState = atom({
  key: 'modalState',
  default: defaultModalState,
});

export function useModalValue() {
  return useRecoilValue(modalState);
}

export function useModalActions() {
  const set = useSetRecoilState(modalState);
  return useMemo(
    () => ({
      open(Component, props) {
        set({
          ...defaultModalState,
          ...props,
          Component,
          visible: true,
        });
      },
      close() {
        set((prev) => ({ ...prev, visible: false }));
      },
    }),
    [set]
  );
}
