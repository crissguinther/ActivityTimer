import {configureStore} from '@reduxjs/toolkit';
import activityReducer from '../features/activities/activitiesSlice';

export const store = configureStore({
  reducer: {
    activity: activityReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
