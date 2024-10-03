import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 66px;

  display: flex;
  align-items: center;

  padding: 8px;

  background: #030712;

  border-radius: 8px;

  & + & {
    margin-top: 8px;
  }

  .content {
    width: 92%;
  }

  .action {
    width: 8%;

    display: flex;
    justify-content: space-around;
    flex-direction: row;

    span:first-child {
      &:hover {
        color: #b91c1c;
      }
    }

    span:last-child {
      &:hover {
        color: #0369a1;
      }
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

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
      background-color: #dc2626;

      &:hover {
        background-color: #b91c1c;
      }
    }

    button:last-child {
      background-color: #1d4ed8;

      &:hover {
        background-color: #1e40af;
      }
    }
  }
`;
