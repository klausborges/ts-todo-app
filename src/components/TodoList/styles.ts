import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  min-width: 700px;
`;

export const Item = styled.div`
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
      background: ${shade(0.2, '#04d363')};
    }
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  height: 24px;
  margin-bottom: 8px;

  strong {
    flex: 1;
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

export const List = styled.div`
  max-height: 30vh;
  overflow: auto;

  padding: 0 8px;
`;

export const FinishedTodos = styled.section`
  margin-top: 16px;
  padding: 0 8px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;

export const UnfinishedTodos = styled.section`
  margin-top: 16px;
  padding: 0 8px;

  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: space-between;
`;
