
import TodoList from "./views/TodoList";

/**
 * Arrow function
 * Css API
 * Reducer and React memo
 * useMeno for fitter
 * 
 * useContext, useReducer
 * Typescript
 * 
 * 
 * Example data
    {
    byId: {
      1: {
          id: 1,
          name: 'Learn ReactJS',
          status: 'pending',
          createdAt: // timestamp
          updatedAt: // timestamp
      },
      2: {
          id: 2,
          name: 'Learn TypeScript',
          status: 'inprogress',
          createdAt: // timestamp
          updatedAt: // timestamp
      },
      3: {
          id: 3,
          name: 'Learn Javascript',
          status: 'done',
          createdAt: // timestamp
          updatedAt: // timestamp
      }
    },
    allIds: [1, 2, 3]
    }
 * 
 */

function App() {
  return (
    <>
      <TodoList />
    </>
  );
}

export default App;
