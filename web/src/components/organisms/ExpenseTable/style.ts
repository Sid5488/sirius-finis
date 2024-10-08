import styled from 'styled-components';

export const Table = styled.table`
  max-width: 75px;
  min-width: 1200px;

  border-spacing: 0.5em;
  border-collapse: separate;

  tr {
    th {
      height: 30px;

      padding: 8px;
      border-radius: 6px;

      color: #000;
      text-align: left;

      background-color: #d4d4d8;
    }

    td {
      height: 30px;

      padding: 8px;
      border-radius: 6px;

      background-color: #09090b;

      &.action {
        display: flex;
        justify-content: space-evenly;

        span:hover {
          cursor: pointer;
        }
      }
    }
  }
`;
