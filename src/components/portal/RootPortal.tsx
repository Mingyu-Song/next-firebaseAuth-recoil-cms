import isServer from 'lib/utils/isServer';
import { useMemo } from 'react';
import ReactDOM from 'react-dom';

export type RootPortalProps = { children: React.ReactNode };

function RootPortal({ children }: RootPortalProps) {
  if (isServer) return null;

  const el = useMemo(() => document.getElementById('root-portal'), []);
  if (!el) return null;
  return ReactDOM.createPortal(children, el);
}

export default RootPortal;
