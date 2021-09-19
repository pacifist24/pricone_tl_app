import { VFC } from 'react';
import dynamic from 'next/dynamic';

const TLTabComponent = dynamic(
  () => import('../../components/organizms/TLTab'),
  { ssr: false },
);

const TLTab: VFC = () => (
  <>
    <TLTabComponent />
  </>
);

export default TLTab;
