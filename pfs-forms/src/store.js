import { configureStore } from '@reduxjs/toolkit'
import scheduleOneReducer from './reducers/scheduleOneReducer'

const store = configureStore({
  reducer: {
    scheduleOne: scheduleOneReducer
  }
})

// TODO: implement process.env check for production/dev/testing
store.subscribe(() => {
  const storeNow = store.getState()
  console.log('STORENOW', storeNow)
})

export default store
