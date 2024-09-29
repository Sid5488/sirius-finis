import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100%;
`;

export const Header = styled.header`
  display: flex;

  width: 100%;
  height: 200px;

  align-items: center;
  justify-content: center;

  background-color: #18181b;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  main {
    max-width: 75rem;

    form {  
      width: 100%;
  
      display: flex;
      justify-content: center;
  
      margin-top: calc(0px - 1.5rem - 6px);
      margin-bottom: 50px;
  
      input {
        width: 39.875rem;
        height: 3.375rem;
  
        border: 0;
        outline: none;
        border-radius: 8px;
  
        padding: 8px;
  
        background: #030712;
        color: #d1d5db;
      }
  
      button {
        width: 5.625rem;
        height: 3.25rem;
  
        display: flex;
        align-items: center;
        justify-content: center;
  
        border: 0;
        outline: none;
        border-radius: 8px;
  
        font-size: bold;
  
        background-color: #15803d;
        color: #fff;
  
        margin: 0 0.5rem;
  
        transition: 0.1s background;
      }
    }
  }
`;
