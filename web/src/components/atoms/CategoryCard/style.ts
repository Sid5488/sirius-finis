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
