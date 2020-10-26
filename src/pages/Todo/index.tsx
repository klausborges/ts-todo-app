import React, {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { formatDistanceToNow, formatDistance } from 'date-fns';
import { FiTrash, FiPlus } from 'react-icons/fi';

import {
  Container,
  Form,
  TodoList,
  TodoHeader,
  TodoItem,
  Badge,
} from './styles';

interface TodoItem {
  id: string;
  description: string;
  createdAt: Date;
  completedAt: Date | null;
}

/* eslint-disable react-hooks/exhaustive-deps */

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const storedTodos = localStorage.getItem('@todo-app:todos');

    return storedTodos ? JSON.parse(storedTodos) : [];
  });
  const [newTodo, setNewTodo] = useState('');
  const [updateTick, setUpdateTick] = useState(0);

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

  const handleRemoveTodo = useCallback(
    (id: string) => {
      setTodos(todos.filter(todo => todo.id !== id));
    },
    [todos],
  );

  const handleToggleTodo = useCallback(
    (id: string) => {
      setTodos(
        todos.map(todo =>
          todo.id !== id
            ? todo
            : {
                ...todo,
                completedAt: todo.completedAt ? null : new Date(),
              },
        ),
      );
    },
    [todos],
  );

  useEffect(() => {
    localStorage.setItem('@todo-app:todos', JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    const timerId = setInterval(() => {
      setUpdateTick(t => t + 1);
    }, 5000);

    return () => clearInterval(timerId);
  }, []);

  const unfinishedTodos = useMemo(
    () => todos.filter(todo => !todo.completedAt),
    [todos, updateTick],
  );

  const finishedTodos = useMemo(() => todos.filter(todo => todo.completedAt), [
    todos,
    updateTick,
  ]);

  return (
    <Container>
      <Form onSubmit={handleAddTodo}>
        <input
          value={newTodo}
          onChange={e => setNewTodo(e.target.value)}
          placeholder="What do you need to do?"
        />
        <button type="submit">
          <FiPlus size={28} />
        </button>
      </Form>

      <TodoList>
        <TodoHeader>
          <strong>Tasks</strong>
          <Badge>{`${unfinishedTodos.length}/${todos.length}`}</Badge>
        </TodoHeader>

        {unfinishedTodos.map(todo => (
          <TodoItem key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completedAt !== null}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <div>
              <span className="description">{todo.description}</span>
              <span className="time">
                {formatDistanceToNow(new Date(todo.createdAt), {
                  addSuffix: true,
                  includeSeconds: true,
                })}
              </span>
            </div>
            <button type="button" onClick={() => handleRemoveTodo(todo.id)}>
              <FiTrash size={16} />
            </button>
          </TodoItem>
        ))}
      </TodoList>

      <TodoList>
        <TodoHeader>
          <strong>Finished Tasks</strong>
          <Badge>{`${finishedTodos.length}/${todos.length}`}</Badge>
        </TodoHeader>

        {finishedTodos.map(todo => (
          <TodoItem key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completedAt !== null}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <div>
              <span className="description">{todo.description}</span>
              <span className="time">
                {todo.completedAt &&
                  formatDistance(
                    new Date(todo.completedAt),
                    new Date(todo.createdAt),
                    {
                      addSuffix: true,
                      includeSeconds: true,
                    },
                  )}
              </span>
            </div>
            <button type="button" onClick={() => handleRemoveTodo(todo.id)}>
              <FiTrash size={16} />
            </button>
          </TodoItem>
        ))}
      </TodoList>
    </Container>
  );
};

export default Todo;
