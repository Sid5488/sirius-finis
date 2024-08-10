import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  
  width: 100vw;
  height: 100vh;

  margin: 0px;

  overflow: hidden;

  .sirius-icon {
    margin-bottom: 15px;
  }

  .login-container {
    height: 100vh;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    z-index: 2;
    position: relative;
  }

  .login-card {
    width: 100%;
    max-width: 400px;

    background-color: white;

    padding: 20px;

    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

    text-align: center;

    h1 {
      color: black;
      margin-bottom: 20px;
    }

    form {
      display: flex;
      justify-content: center;

      flex-direction: row;
      flex-wrap: wrap;

      gap: 10px;
    }

    label {
      color: black;
      margin-bottom: 5px;
    }

    input {
      width: 80%;

      padding: 10px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }

    button {
      width: 80%;

      color: white;
      font-size: 16px;

      background-color: #0056b3;

      padding: 10px;

      border: none;
      border-radius: 4px;

      cursor: pointer;

      &:hover {
        background-color: #0056b3;
        filter: brightness(90%);
      }
    }

    .row {
      width: 100%;
    }
  }
`;
