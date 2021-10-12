import { VFC } from 'react';

type Props = {
  tlTextLines: string[];
};

const TLTab: VFC<Props> = ({ tlTextLines }) => (
  <div className="h-screen p-2 overflow-scroll overflow-x-hidden font-mono text-sm">
    {tlTextLines.map((line) => (
      <div key={Math.random()}>{line}</div>
    ))}
  </div>
);

export default TLTab;
