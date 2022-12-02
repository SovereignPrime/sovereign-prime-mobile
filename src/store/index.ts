import { configureStore, combineReducers } from '@reduxjs/toolkit';

import authReducer from '@store/modules/auth';

const reducers = combineReducers({
  auth: authReducer,
});

const store = configureStore({
  reducer: reducers,
});

export default store;
