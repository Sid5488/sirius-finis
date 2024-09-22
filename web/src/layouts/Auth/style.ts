import styled from "styled-components";

export const Container = styled.div`
  width: max-content;
  height: max-content;
  min-width: 100vw;

  color: white;
  background-color: #0b1e2f;
`;

export const Content = styled.div`
  width: max-content;
  height: max-content;
  min-height: 100vh;

  color: white;

  padding-left: 16px;
  padding-right: 16px;
`;

export const Menu = styled.nav`
  width: 100%;
  height: 60px;

  display: flex;
  justify-content: space-between;
  align-items: center;

  box-shadow: 0 0.5px 10px rgba(0, 0, 0, 0.5);

  background-color: #001f3f;
  
  padding: 0 20px;

  .menu {
    display: flex;
    
    margin: 0;
    padding: 0;
    
    list-style: none;

    li {
      margin: 0 15px;
    }

    a {
      color: #ffffff;
      text-decoration: none;
      transition: color 0.3s;

      &:hover {
        color: #00bfff;
      }
    }
  }
`;
