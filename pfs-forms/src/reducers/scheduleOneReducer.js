import { createSlice } from '@reduxjs/toolkit'

export const scheduleOneSlice = createSlice({
  name: 'scheduleOne',
  initialState: {
    rows: [
      {
        id: 1,
        owner: '',
        description: '',
        bank: '',
        balance: 0,
        isDeleted: false
      },
    ]
  },
  reducers: {
    addRow: (state, action) => {
      state.rows.push(action.payload)
    },
    editRow: (state, action) => {
      const rowToUpdate = state.rows.find(row => row.id === action.payload.id)

      const updatedRow = {
        ...rowToUpdate,
        [action.payload.field]: action.payload.value
      }

      const updatedState = state.rows.map(row => row.id === action.payload.id
        ? updatedRow
        : row
      )

      state.rows = updatedState
    }
    ,
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

export const { addRow, editRow, removeRows } = scheduleOneSlice.actions

export default scheduleOneSlice.reducer
