import { createSlice } from '@reduxjs/toolkit'

export const scheduleOneSlice = createSlice({
  name: 'scheduleOne',
  initialState: {
    value: 0
    // { id: 1, owner: 'hllo', description: 'wrld', bank: 'biwa', balance: 59999 }
  },
  reducers: {
    increment: state => {
      state.value += 1
    },
    decrement: state => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  }
})

export const { increment, decrement, incrementByAmount } = scheduleOneSlice.actions

export default scheduleOneSlice.reducer
