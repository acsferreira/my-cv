import { configureStore } from '@reduxjs/toolkit';
import { educationReducer } from './reducers/education/education';
import { userReducer } from './reducers/user';
import { workReducer } from './reducers/work';
import { skillsReducer } from './reducers/skills/skills';

export const store = configureStore({
  reducer: {
    user: userReducer,
    work: workReducer,
    education: educationReducer,
    skills: skillsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
