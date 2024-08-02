import React from 'react';
import { GlobalStyles } from './style/GlobalStyles';
import TodoList from './components/TodoList';

const App: React.FC = () => {
  return (
    <>
      <GlobalStyles />
      <TodoList />
    </>
  );
};

export default App;

