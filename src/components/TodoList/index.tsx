import React, { useMemo, useState, useEffect, useCallback } from 'react';
import {
  FiTrash,
  FiChevronRight,
  FiChevronDown,
  FiThumbsUp,
} from 'react-icons/fi';
import { formatDistanceToNow, formatDistance } from 'date-fns';

import {
  Container,
  Header,
  Item,
  List,
  Badge,
  FinishedTodos,
  UnfinishedTodos,
  AllDone,
} from './styles';

interface TodoItem {
  id: string;
  description: string;
  createdAt: Date;
  completedAt: Date | null;
}

interface TodoListProps {
  todos: TodoItem[];
  handleRemoveTodo(id: string): void;
  handleToggleTodo(id: string): void;
}

/* eslint-disable react-hooks/exhaustive-deps */

const TodoList: React.FC<TodoListProps> = ({
  todos,
  handleRemoveTodo,
  handleToggleTodo,
}) => {
  const [updateTick, setUpdateTick] = useState(0);
  const [collapseFinishedTodos, setCollapseFinishedTodos] = useState(false);

  const handleCollapseFinishedTodos = useCallback(() => {
    setCollapseFinishedTodos(state => !state);
  }, []);

  const unfinishedTodos = useMemo(
    () => todos.filter(todo => !todo.completedAt),
    [todos, updateTick],
  );

  const finishedTodos = useMemo(() => todos.filter(todo => todo.completedAt), [
    todos,
    updateTick,
  ]);

  useEffect(() => {
    const timer = setInterval(() => {
      setUpdateTick(t => t + 1);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Container>
      {unfinishedTodos.length === 0 && todos.length > 0 ? (
        <AllDone>
          <FiThumbsUp size={72} />
          <p>All tasks done, good job!</p>
        </AllDone>
      ) : (
        <UnfinishedTodos>
          <Header>
            <strong>Tasks</strong>
            <Badge>{`${unfinishedTodos.length}/${todos.length}`}</Badge>
          </Header>

          <List>
            {unfinishedTodos.map(todo => (
              <Item key={todo.id}>
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
              </Item>
            ))}
          </List>
        </UnfinishedTodos>
      )}

      <FinishedTodos>
        <Header>
          <button type="button" onClick={handleCollapseFinishedTodos}>
            {collapseFinishedTodos ? <FiChevronRight /> : <FiChevronDown />}
          </button>
          <strong>Finished Tasks</strong>
          <Badge>{`${finishedTodos.length}/${todos.length}`}</Badge>
        </Header>

        <List collapsed={collapseFinishedTodos}>
          {finishedTodos.map(todo => (
            <Item key={todo.id}>
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
            </Item>
          ))}
        </List>
      </FinishedTodos>
    </Container>
  );
};

export default TodoList;
