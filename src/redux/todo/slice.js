import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  byId: {},
  allIds: [],
};

const todoSlice = createSlice({
  name: "todo",
  initialState,
  extraReducers: (builder) => {
    builder.addCase("add", (state, action) => {
      const { payload } = action;
      const { taskId, name, status } = payload;
      return {
        ...state,
        byId: { ...state.byId, [taskId]: { id: taskId, name, status } },
        allIds: [...state.allIds, taskId],
      };
    });
    builder.addCase("completed", (state, action) => {
      const { taskId } = action;
      const task = state.byId[taskId];
      return {
        ...state,
        byId: {
          ...state.byId,
          [taskId]: {
            ...task,
            status: task.status === "completed" ? "pendding" : "completed",
          },
        },
      };
    });
    builder.addCase("delete", (state, action) => {
      const { taskId } = action;

      delete state.byId[taskId];
      return {
        ...state,
        allIds: [...state.allIds.filter((item) => item !== taskId)],
      };
    });
    builder.addCase("edit", (state, action) => {
      const { payload } = action;
      const { taskId, name } = payload;

      const task = state.byId[taskId];

      return {
        ...state,
        byId: {
          ...state.byId,
          [taskId]: {
            ...task,
            name,
          },
        },
      };
    });
  },
});

export const { add, completed, editTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
