import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './slice/cartSlice';
import counterReducer from './slice/counterSlice';


const store = configureStore({
  reducer: {
    cart: cartReducer,
    counter: counterReducer
  }
});

console.log('store', store.getState()); 


export type RootState = ReturnType<typeof store.getState>;
// export type AppDispatch = typeof store.dispatch;
export default store;