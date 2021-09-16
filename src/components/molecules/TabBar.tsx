import { VFC } from 'react';
import clsx from 'clsx';

const TabButton: VFC<{
  isActive: boolean;
  onClick: () => void;
  label: string;
}> = ({ isActive, onClick, label }) => (
  <button
    type="button"
    className={clsx(
      'h-10 text-xs font-medium px-0.5 border-t-2 focus:outline-none transition-colors duration-150',
      {
        'border-turquoise-500 text-gray-900': isActive,
        'border-transparent text-gray-500 hover:text-gray-900 focus:text-gray-900':
          !isActive,
      },
    )}
    onClick={onClick}
  >
    <span className="border-b-2 border-transparent py-2.5">{label}</span>
  </button>
);

type Props = {
  tabs: {
    label: string;
    onClick: () => void;
    isActive: boolean;
  }[];
};

const TabBar: VFC<Props> = ({ tabs }) => (
  <div className="flex pl-5 pr-4 border-b space-x-5">
    {tabs.map((tab) => (
      <TabButton
        isActive={tab.isActive}
        onClick={tab.onClick}
        label={tab.label}
        key={tab.label}
      />
    ))}
  </div>
);

export default TabBar;
