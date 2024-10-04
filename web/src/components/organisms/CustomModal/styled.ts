import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-wrap: wrap;

  header {
    width: 100%;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    button {
      color: white;
      font-size: 1.5rem;

      background-color: transparent;
      
      border: none;
    }
  }

  main {
    width: 100%;

    margin-top: 12px;
  }
`;
