import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import TodoItem from './TodoItem';
import { Todo } from '../types';

const TodoList: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>(() => {
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  const [newTodo, setNewTodo] = useState<string>('');

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    const newTask: Todo = { id: Date.now(), text: newTodo, completed: false };
    setTodos([...todos, newTask]);
    setNewTodo('');
  };

  const toggleComplete = (id: number) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <Container>
      <Header>To-do List</Header>
      <InputContainer>
        <Input 
          type="text" 
          value={newTodo} 
          onChange={(e) => setNewTodo(e.target.value)} 
          placeholder="Adicione uma nova tarefa..."
        />
        <AddButton onClick={addTodo}>➕</AddButton>
      </InputContainer>
      {todos.map(todo => (
        <TodoItem 
          key={todo.id} 
          todo={todo} 
          toggleComplete={toggleComplete} 
          deleteTodo={deleteTodo} 
        />
      ))}
    </Container>
  );
};

export default TodoList;

const Container = styled.div`
  width: 400px;
  background-color: white;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const Header = styled.h1`
  text-align: center;
  color: #333;
`;

const InputContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Input = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const AddButton = styled.button`
  padding: 10px;
  border: none;
  background-color: #007BFF;
  color: white;
  cursor: pointer;
  border-radius: 4px;
  margin-left: 5px;
`;
