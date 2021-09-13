import dynamic from 'next/dynamic';
import GlobalNav from 'components/nav/GlobalNav';
const TuiEditor = dynamic(() => import('components/editor/TuiEditor'), {
  ssr: false,
});

export default function Write() {
  return (
    <div>
      <GlobalNav />
      <TuiEditor />
    </div>
  );
}
