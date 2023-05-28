import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import userDataInitialState from "./type";

const userDataSlice = createSlice({
  name: "userData",
  initialState: userDataInitialState,
  reducers: {
    setName: (state, { payload }: PayloadAction<string>) => {
      state.name = payload;
    },
    setEmail: (state, { payload }: PayloadAction<string>) => {
      state.email = payload;
    },
    setCpf: (state, { payload }: PayloadAction<string>) => {
      state.cpf = payload;
    },
  },
});

export const { setName, setEmail, setCpf } = userDataSlice.actions;

export { userDataSlice };
