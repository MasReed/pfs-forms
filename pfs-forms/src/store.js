import { configureStore } from '@reduxjs/toolkit'
import scheduleOneReducer from './reducers/scheduleOneReducer'
import scheduleTwoReducer from './reducers/scheduleTwoReducer'


const store = configureStore({
  reducer: {
    scheduleOne: scheduleOneReducer,
    scheduleTwo: scheduleTwoReducer,
  }
})

// TODO: implement process.env check for production/dev/testing
store.subscribe(() => {
  const storeNow = store.getState()
  console.log('STORENOW', storeNow)
})

export default store
