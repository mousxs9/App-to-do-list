import React from 'react';
import styled from 'styled-components';
import { Todo } from '../types';

interface TodoItemProps {
  todo: Todo;
  toggleComplete: (id: number) => void;
  deleteTodo: (id: number) => void;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <Item completed={todo.completed}>
      <Text onClick={() => toggleComplete(todo.id)}>
        {todo.text}
      </Text>
      <CompleteButton onClick={() => toggleComplete(todo.id)}>
        {todo.completed ? '✅ Concluída' : '✔️ Completar'}
      </CompleteButton>
      <DeleteButton onClick={() => deleteTodo(todo.id)}>🗑️</DeleteButton>
    </Item>
  );
};

export default TodoItem;

const Item = styled.div<{ completed: boolean }>`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin: 5px 0;
  background-color: ${props => props.completed ? '#d3ffd3' : '#fff'};
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  color: red;
`;

const Text = styled.span`
  flex-grow: 1;
`;

const CompleteButton = styled.button`
  background-color: #007BFF;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  padding: 5px 10px;

  &:hover {
    background-color: #0056b3;
  }
`;


