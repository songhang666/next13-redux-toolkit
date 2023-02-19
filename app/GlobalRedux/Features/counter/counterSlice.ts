"use client";

import { createSlice } from "@reduxjs/toolkit";

export interface CounterState {
  value: number;
}

const initialState: CounterState = {
  value: 0,
};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
    decrementByAmount: (state, action) => {
      state.value -= action.payload;
    },
    multiplyByAmount: (state, action) => {
      state.value = action.payload*state.value
    }
  },
});

export const { increment, decrement, incrementByAmount, decrementByAmount,multiplyByAmount } =
  counterSlice.actions;

export default counterSlice.reducer;
