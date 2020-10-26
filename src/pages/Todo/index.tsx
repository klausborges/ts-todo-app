import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { Container, Form } from './styles';

interface TodoItem {
  id: string;
  description: string;
  createdAt: Date;
  completedAt: Date | null;
}

const Todo: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);

  return (
    <Container>
      <Form>
        <input />
        <button type="submit">+</button>
      </Form>
    </Container>
  );
};

export default Todo;
