import styled from "styled-components";

export const Container = styled.div`
  &.sky {
    width: 100vw;
    height: 100vh;
  
    top: 0;
    left: 0;
    position: fixed;
  
    z-index: 1;
  
    .star {
      width: 2px;
      height: 2px;

      background-color: white;
  
      position: absolute;
  
      border: 2px 4px 2px 4px solid white;
  
      transform: rotate(45deg);
  
      opacity: 0;
  
      animation: blink 1s infinite alternate;
    }
  
    @keyframes blink {
      0% {
        opacity: 0.5;
      }
      100% {
        opacity: 1;
      }
    }
  }
`;