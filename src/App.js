import React, { useReducer } from 'react';
import AppRouter from './routes/AppRouter';
import { BookContext } from './useReducer/BookContext';
import { BookReducer } from './useReducer/BookReducer';

const App = () => {

  const [state, dispatch] = useReducer(BookReducer, []);

  return (
    <BookContext.Provider
      value={{state, dispatch}}
    >
      <AppRouter />
    </BookContext.Provider>
  )
}

export default App;
