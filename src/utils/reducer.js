const reducer = (state, action) => {
  switch (action.type) {
    case "add": {
      const { payload } = action;
      let { taskId, name, status } = payload;

      return {
        ...state,
        byId: { ...state.byId, [taskId]: { id: taskId, name, status } },
        allIds: [...state.allIds, taskId],
      };
    }
    case "fitter": {
      return {
        ...state,
        byId: {
          ...Object.fromEntries(
            Object.entries(state.byId).filter((ele) => {
              if (action.status === "all") {
                return true;
              } else {
                return ele[1].status === action.status;
              }
            })
          ),
        },
      };
    }
    case "completed": {
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
    }
    case "delete": {
      const { taskId } = action;

      delete state.byId[taskId];
      return {
        ...state,
        allIds: [...state.allIds.filter((item) => item !== taskId)],
      };
    }
    case "edit": {
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
    }
    default: {
      throw new Error("Unknown action: " + action.type);
    }
  }
};

export default reducer;
