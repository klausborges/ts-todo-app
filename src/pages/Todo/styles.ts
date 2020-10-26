import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.main`
  padding: 80px 0;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.form`
  display: flex;

  min-width: 720px;
  flex: 0;

  input {
    flex: 1;

    height: 42px;
    border: 2px solid #c5c5c5;
    border-radius: 8px 0 0 8px;
    padding: 0 8px;
    color: #222;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;

    width: 50px;
    height: 42px;
    margin-left: -2px;
    border: 0;
    border-radius: 0 8px 8px 0;

    background: #03d3d3;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#03d3d3')};
    }
  }
`;

export const TodoList = styled.section`
  min-width: 700px;
  margin-top: 16px;
  padding: 0 8px;

  max-height: 30vh;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;

  overflow: auto;
`;

export const TodoHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: stretch;

  strong {
    flex: 1;
  }
`;

export const TodoItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: stretch;

  padding-top: 8px;

  input {
    margin-right: 8px;
  }

  div {
    flex: 1;
    display: flex;
    align-items: center;

    span.description {
      flex: 1;
      margin-right: 8px;
    }

    span.time {
      margin-right: 8px;
      font-size: 10px;
    }
  }

  button {
    border: 0;
    border-radius: 50%;
    width: 32px;
    height: 32px;

    display: flex;
    align-items: center;
    justify-content: center;

    background: #03d363;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#03d363')};
    }
  }
`;

export const Badge = styled.span`
  border-radius: 24px;
  background: #222;
  color: #f1f1f1;
  font-weight: 500;
  font-size: 12px;
  padding: 2px 8px;
`;
