import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;

  font-family: "Ubuntu", sans-serif;
  font-weight: 400;
  font-style: normal;
 }

 button:hover {
  cursor: pointer;
 }

 a {
  text-decoration: none;
  color: dodgerblue;
 }
`;
