import React, { FormEvent, useCallback, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container, Form, TodoList, TodoHeader, TodoItem } from './styles';

interface TodoItem {
  id: string;
  description: string;
  createdAt: Date;
  completedAt: Date | null;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      if (!newTodo) return;

      setTodos([
        ...todos,
        {
          id: uuidv4(),
          description: newTodo,
          createdAt: new Date(),
          completedAt: null,
        },
      ]);

      setNewTodo('');
    },
    [todos, newTodo],
  );

  return (
    <Container>
      <Form onSubmit={handleAddTodo}>
        <input
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="What do you need to do?"
        />
        <button type="submit">+</button>
      </Form>

      <TodoList>
        <TodoHeader>
          <strong>Tasks</strong>
        </TodoHeader>

        {todos.map(todo => (
          <TodoItem key={todo.id}>
            <input type="checkbox" checked={todo.completedAt !== null} />
            <span>{todo.description}</span>
            <button type="button">X</button>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

export default Todo;
