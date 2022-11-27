import {createSlice, PayloadAction} from '@reduxjs/toolkit';

type IActivity = {
  id: number;
  name: string;
  duration: number;
};

const initialState = new Array<IActivity>();

const activitySlice = createSlice({
  name: 'Activities',
  initialState,
  reducers: {
    addActivity: (state, action: PayloadAction<IActivity>) => {
      state.push(action.payload);
    },
    removeActivity: (state, action: PayloadAction<IActivity>) => {
      const {id} = action.payload;
      const newState: Array<IActivity> = state.filter(
        activity => activity.id != id,
      );
      state = newState;
    },
    resetActivities: state => (state = new Array<IActivity>()),
  },
});

export const {addActivity, removeActivity, resetActivities} =
  activitySlice.actions;
export default activitySlice.reducer;
