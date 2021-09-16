import { VFC } from 'react';
import { useAppSelector } from '../../app/hooks';
import { selectTL } from '../../ducks/tl';
import TLTabComponent from '../../components/organizms/TLTab';

const TLTab: VFC = () => {
  const tl = useAppSelector(selectTL);

  return (
    <>
      <TLTabComponent tl={tl} />
    </>
  );
};

export default TLTab;
