import { createSlice } from '@reduxjs/toolkit'

export const scheduleTwoSlice = createSlice({
  name: 'scheduleTwo',
  initialState: {
    rows: [
      {
        id: 1,
        description: 'test',
        registrant: 'tester',
        amount: 15,
        retirement: false,
        value: 0,
        isDeleted: false
      },
      {
        id: 2,
        description: 'test',
        registrant: 'tester',
        amount: 15,
        retirement: false,
        value: 0,
        isDeleted: false
      },
    ]
  },
  reducers: {
    addRow: (state, action) => {
      const makeId = () => {
        const ids = state.rows.map(row => row.id)
        return Math.max(...ids) + 1
      }

      const newRow = {
        id: makeId(),
        description: 'Edit',
        registrant: 'Me',
        amount: 0,
        retirement: false,
        value: 0,
        isDeleted: false
      }

      state.rows.push(newRow)
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
        // const index = state.rows.indexOf(state.rows.find(row => row.id === rowId))
        // if (index !== -1) {
        //   state.rows.splice(index, 1)
        // }
        const rowToSoftDelete = state.rows.find(row => row.id === rowId)
        const softDeletedRow = {
          ...rowToSoftDelete,
          isDeleted: true
        }
        const updatedState = state.rows.map(row => row.id === rowId
          ? softDeletedRow
          : row
        )

        state.rows = updatedState
      })
    },
  }
})

export const { addRow, editRow, removeRows } = scheduleTwoSlice.actions

export default scheduleTwoSlice.reducer
