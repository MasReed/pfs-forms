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
    removeRows: (state, action) => {
      action.payload.forEach(rowId => {
        const index = state.rows.indexOf(state.rows.find(row => row.id === rowId))
        if (index !== -1) {
          state.rows.splice(index, 1)
          // TODO: instead add isDeleted property for soft deletes only display rows where isDeleted === false in scheduleOne component
        }
      })
    },
  }
})

export const { addRow, decrement, removeRows } = scheduleOneSlice.actions

export default scheduleOneSlice.reducer
