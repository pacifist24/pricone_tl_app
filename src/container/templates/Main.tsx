import { VFC } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { changeActiveTab, selectActiveTab, TabType } from '../../ducks/main';
import MainComponent from '../../components/templates/Main';

const Main: VFC = () => {
  const dispatch = useAppDispatch();
  const activeTab = useAppSelector(selectActiveTab);

  return (
    <>
      <MainComponent
        activeTab={activeTab}
        changeActiveTab={(tabType: TabType) =>
          dispatch(changeActiveTab({ activeTab: tabType }))
        }
      />
    </>
  );
};

export default Main;

// import { useAppSelector, useAppDispatch } from '../app/hooks';
// import { changeBossName, selectBossName, selectTL } from '../ducks/tl';
// import { changeHeaderFormat, selectHeaderFormat } from '../ducks/style';

// const Home:NextPage = () => {
//   const dispatch = useAppDispatch();
//   const bossName = useAppSelector(selectBossName);
//   const tL = useAppSelector(selectTL);
//   // console.log(tL);
//   const headerFormat = useAppSelector(selectHeaderFormat);

//   return (
//     <div className="mt-10">
//       <h1 className="text-6xl font-bold">
//         Welcome to
//         {' '}
//         <a className="text-blue-600" href="https://nextjs.org">
//           Next.js!
//         </a>
//       </h1>
//       {bossName}
//       <button type="button" onClick={() => dispatch(changeBossName('adb'))}>bossname</button>
//       {headerFormat}
//       <button type="button" onClick={() => dispatch(changeHeaderFormat('<fasfad>'))}>
//         header
//       </button>
//     </div>
//   );
// };
