import { useMemo } from 'react';
import { atom, useRecoilValue, useSetRecoilState } from 'recoil';

const defaultModalState = {
  visible: false,
  title: '',
  message: '',
  confirmText: 'OK',
  cancelText: 'CANCEL',
  onConfirm() {},
  onCancel: undefined,
};

const modalState = atom({
  key: 'modalState',
  default: defaultModalState,
});

export function useModalValue() {
  return useRecoilValue(modalState);
}

export function useGlobalDialogActions() {
  const set = useSetRecoilState(modalState);
  return useMemo(
    () => ({
      open() {
        set({
          ...defaultModalState,
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
