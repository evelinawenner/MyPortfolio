import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  width: 100vw;
  background-color: #d0e3c2;

  .hero {
    position: relative;
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
  }

  .frontend {
    position: absolute;
    right: 0;
    margin-top: 100px;
    font-family: Playfair Display, serif;
    font-weight: 600;
    font-size: 180px;
    color: #c6dbb6;
    z-index: 0;
  }

  .developer {
    position: absolute;
    left: 0;
    margin-top: 400px;
    font-family: Playfair Display, serif;
    font-weight: 600;
    font-size: 180px;
    color: #c6dbb6;
    z-index: 0;
  }
`;
