import styled from "styled-components";

export const Form = styled.form`
  fieldset {
    padding: 8px;
    border-radius: 8px;

    & + fieldset {
      margin-top: 16px;
    }

    div {
      display: flex;
      flex-wrap: wrap;

      & + div {
        margin-top: 16px;
      }

      label {
        width: 100%;
        margin-bottom: 4px;
      }
    }
  }

  footer {
    display: flex;
    justify-content: space-evenly;

    margin-top: 32px;

    button {
      width: 75px;
      height: 45px;

      padding: 8px;

      border: none;
      border-radius: 6px;

      &:first-child {
        color: #fff;
        background-color: #15803d;
      }

      &:last-child {
        color: #fff;
        background-color: #b91c1c;
      }
    }
  }
`;
