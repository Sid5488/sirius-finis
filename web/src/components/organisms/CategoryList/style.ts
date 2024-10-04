import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  .list, .empty {
    header {
      width: 100%;

      margin-bottom: 16px;
      padding-left: 4px;
      padding-bottom: 6px;

      border-bottom: solid 1px #333;
      border-radius: 4px;
    }
  }

  .empty {
    display: flex;
    flex-wrap: wrap;

    align-items: center;
    justify-content: center;

    div {
      display: flex;
      flex-direction: column;
      align-items: center;

      strong {
        font-weight: bold;
      }

      p {
        text-align: center;
      }
    }
  }
`;
