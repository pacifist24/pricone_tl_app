import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export type CommonDialogState = {
  isOpen: boolean;
  message: string;
  severity: "error" | "info" | "success" | "warning";
  duration: number;
};

const initialState: CommonDialogState = {
  isOpen: false,
  message: "",
  severity: "error",
  duration: 0,
};

export const commonDialogSlice = createSlice({
  name: "commonDialog",
  initialState,
  reducers: {
    openDialog: (
      state,
      action: PayloadAction<{
        message: string;
        severity: "error" | "info" | "success" | "warning";
        duration: number;
      }>
    ) => {
      state.isOpen = true;
      state.message = action.payload.message;
      state.severity = action.payload.severity;
      state.duration = action.payload.duration;
    },
    closeDialog: (state) => {
      state.isOpen = false;
      state.message = "";
      state.severity = "error";
      state.duration = 0;
    },
  },
});

export const { openDialog, closeDialog } = commonDialogSlice.actions;

export default commonDialogSlice.reducer;
