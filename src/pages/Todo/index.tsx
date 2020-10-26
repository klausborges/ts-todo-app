import React, {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from 'react';
import { v4 as uuidv4 } from 'uuid';
import { FiTrash, FiPlus } from 'react-icons/fi';

import { Container, Form, TodoList, TodoHeader, TodoItem } from './styles';

interface TodoItem {
  id: string;
  description: string;
  createdAt: Date;
  completedAt: Date | null;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>(() => {
    const storedTodos = localStorage.getItem('@todo-app:todos');

    return storedTodos ? JSON.parse(storedTodos) : [];
  });
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

  const unfinishedTodos = useMemo(
    () => todos.filter(todo => !todo.completedAt),
    [todos],
  );

  const finishedTodos = useMemo(() => todos.filter(todo => todo.completedAt), [
    todos,
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
        </TodoHeader>

        {unfinishedTodos.map(todo => (
          <TodoItem key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completedAt !== null}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <div>
              <span>{todo.description}</span>
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
        </TodoHeader>

        {finishedTodos.map(todo => (
          <TodoItem key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completedAt !== null}
              onChange={() => handleToggleTodo(todo.id)}
            />
            <div>
              <span>{todo.description}</span>
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
