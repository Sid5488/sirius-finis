import styled from "styled-components";

export const DeleteCategory = styled.div`
  width: 100%;
  
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  h3 {
    width: 100%;
    text-align: center;
  }

  div {
    margin-top: 6px;

    button {
      min-width: 50px;
      height: 35px;

      color: white;
      padding: 8px;

      border: none;
      border-radius: 8px;
    }

    button:first-child {
      margin-right: 8px;
      background-color: #1d4ed8;

      &:hover {
        background-color: #1e40af;
      }
    }

    button:last-child {
      background-color: #dc2626;

      &:hover {
        background-color: #b91c1c;
      }
    }
  }
`;