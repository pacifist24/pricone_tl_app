import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "../app/store";

export type Character = {
  name: string;
  star: number;
  lv: number;
  specialLv: number;
  comment: string;
};

export type Line = {
  time: number;
  name: string;
  comment: string;
};

export type TLState = {
  phase: number;
  damage: number;
  bossName: string;
  startTime: number;
  endTime: number;
  characters: Character[];
  timeline: Line[];
};

const initialState: TLState = {
  phase: 0,
  damage: 0,
  bossName: "",
  startTime: 0,
  endTime: 0,
  characters: [],
  timeline: [],
};

export const tLSlice = createSlice({
  name: "tl",
  initialState,
  reducers: {
    changeBossName: (state, action: PayloadAction<string>) => {
      state.bossName = action.payload;
    },
  },
});

export const { changeBossName } = tLSlice.actions;

export const selectBossName = (state: AppState): string => state.tl.bossName;
export const selectTL = (state: AppState): TLState => state.tl;

export default tLSlice.reducer;
