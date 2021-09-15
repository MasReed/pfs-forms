import { createSlice } from '@reduxjs/toolkit'

export const scheduleOneSlice = createSlice({
  name: 'scheduleOne',
  initialState: {
    rows: [
      { id: 1, owner: '', description: '', bank: '', balance: 0 },
    ]
  },
  reducers: {
    addRow: (state, action) => {
      state.rows.push(action.payload)
    },
    decrement: state => {
      state.value -= 1
    },
    removeRow: (state, action) => {
      const index = state.rows.indexOf(action.payload.id)
      if (index !== -1) {
        state.rows.splice(index, 1)
      }
    },
  }
})

export const { addRow, decrement, removeRow } = scheduleOneSlice.actions

export default scheduleOneSlice.reducer
