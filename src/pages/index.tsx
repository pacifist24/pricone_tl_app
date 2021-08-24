import type { NextPage } from "next";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { changeBossName, selectBossName, selectTL } from "../ducks/tl";
import { changeHeaderFormat, selectHeaderFormat } from "../ducks/style";

const IndexPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const bossName = useAppSelector(selectBossName);
  const tL = useAppSelector(selectTL);
  console.log(tL);
  const headerFormat = useAppSelector(selectHeaderFormat);
  return (
    <div>
      {bossName}
      <button onClick={() => dispatch(changeBossName("adb"))}>bossname</button>
      {headerFormat}
      <button onClick={() => dispatch(changeHeaderFormat("<fasfad>"))}>
        header
      </button>
    </div>
  );
};

export default IndexPage;
