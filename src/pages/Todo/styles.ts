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

  min-width: 100%;
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
