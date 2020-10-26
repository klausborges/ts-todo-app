import styled, { css } from 'styled-components';
import { shade } from 'polished';

interface ListProps {
  collapsed?: boolean;
}

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

  button {
    border: 0;
    border-radius: 50%;

    display: flex;
    align-items: center;
    justify-content: center;

    width: 18px;
    height: 18px;
    margin-right: 4px;

    background: #b1b1d1;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#b1b1d1')};
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

export const List = styled.div<ListProps>`
  max-height: 30vh;
  overflow: auto;

  padding: 0 8px;

  ${props =>
    props.collapsed &&
    css`
      display: none;
    `}
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

export const AllDone = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  height: 30vh;

  p {
    flex: 0;
    margin-top: 8px;
  }
`;
