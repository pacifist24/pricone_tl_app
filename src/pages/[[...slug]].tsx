import type { NextPage } from 'next';
// import { ParsedUrlQuery } from 'querystring';
import { GetServerSideProps } from 'next';
import Main from '../container/templates/Main';
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

const Home: NextPage<{ code: string }> = () => (
  <>
    <Main />
  </>
);

export default Home;

// eslint-disable-next-line @typescript-eslint/require-await
export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  if (params.slug && params.slug.length === 1) {
    return { props: { code: params.slug[0] } };
  }

  return { props: { code: 'aa' } };
};
