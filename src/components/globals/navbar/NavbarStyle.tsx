import styled from "styled-components";

export const Container = styled.header`
  position: relative;
  z-index: 2;
  width: 100vw;
  height: 70px;
  background-color: rgba(255, 255, 255, 0.3);
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  .nav-links {
    margin-left: 20px;
  }

  .lang {
    margin-right: 20px;
    cursor: pointer;
  }

  a {
    text-decoration: none;
    font-family: Lato, sans-serif;
    font-size: 20px;
    margin-right: 30px;
    color: #212121;
    font-weight: 700;
    transition: color 0.5s;
    transition-timing-function: ease in;

    &:hover {
      color: #aa8465;
    }
  }
`;
