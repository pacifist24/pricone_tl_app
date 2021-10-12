import { VFC } from 'react';
import ConfigStartTimeInput from 'components/organizms/ConfigStartTimeInput';
import ConfigArrangementInput from 'components/organizms/ConfigArrangementInput';

const ConfigTab: VFC = () => (
  <div className="h-full pb-5 overflow-x-hidden border-b">
    <ConfigStartTimeInput />
    <ConfigArrangementInput />
  </div>
);

export default ConfigTab;
