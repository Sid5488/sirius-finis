import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  
  display: flex;
  justify-content: center;

  main {
    max-width: 75rem;
    min-width: 1200px;

    padding-top: 6rem;

    h1 {
      text-align: center;
      margin-bottom: 32px;
    }

    div {
      display: flex;
      flex-wrap: wrap;
      justify-content: flex-end;
      
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
  
        &.cancel {
          background-color: #b91c1c;
        }
      }
    }
  }
`;
