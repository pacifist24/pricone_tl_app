import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import type { AppState } from "../app/store";

export type PaddingType = "none" | "head" | "tail";
export type ArrangeType = "none" | "same" | "next";

export type StyleState = {
  headerFormat: string;
  selfUBFormat: string;
  bossUBFormat: string;
  footerFormat: string;
  startTime: number;
  shouldAddPadding: PaddingType;
  shouldArrangeHorizontally: ArrangeType;
  nameSubstitutionTable: { [key: string]: string };
};

const initialState: StyleState = {
  headerFormat: "",
  selfUBFormat: "",
  bossUBFormat: "",
  footerFormat: "",
  startTime: 0,
  shouldAddPadding: "none",
  shouldArrangeHorizontally: "none",
  nameSubstitutionTable: {},
};

export const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    changeHeaderFormat: (state, action: PayloadAction<string>) => {
      state.headerFormat = action.payload;
    },
  },
});

export const { changeHeaderFormat } = styleSlice.actions;

export const selectHeaderFormat = (state: AppState): string =>
  state.style.headerFormat;

export default styleSlice.reducer;
