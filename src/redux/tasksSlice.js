import { createSlice } from '@reduxjs/toolkit';
import initialTasks from '../data/tasks.json';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialTasks,
  reducers: {
    addTask: (state, action) => {
      state.unshift({ id: Date.now(), ...action.payload });
    },
    editTask: (state, action) => {
      const { id, editedTask } = action.payload;
      const taskIndex = state.findIndex((task) => task.id === id);
      if (taskIndex !== -1) {
        state[taskIndex] = { ...state[taskIndex], ...editedTask };
      }
    },
    deleteTask: (state, action) => {
      const taskId = action.payload;
      const taskIndex = state.findIndex((task) => task.id === taskId);
      if (taskIndex !== -1) {
        state.splice(taskIndex, 1);
      }
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;
export default tasksSlice.reducer;
