import styled from "styled-components";

export const AboutContainer = styled.div`
  min-height: 100vh;
  width: 100vw;

  .introduction {
    padding-top: 100px;
    height: 400px;
    width: 100%;
    background-color: #d0e3c2;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
      height: 300px;
      width: auto;
      border-radius: 60% 30% 60% 30%;
    }
  }

  .intro-div {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .intro-text  {
    display: flex;
    flex-direction: column;
    margin-left: 30px;

    a {
      position: relative;
      color: #aa8465;
      text-decoration: none;
      z-index: 2;

      &:hover {
        color: #0c343d;
        -o-transition: 0.5s;
        -ms-transition: 0.5s;
        -moz-transition: 0.5s;
        -webkit-transition: 0.5s;
        transition: 0.5s;

        &::after {
          position: absolute;
          content: "";
          background: #c6dbb6;
          margin: 0 auto;
          left: 0;
          right: 0;
          bottom: 1px;
          height: 5px;
          width: 105%;
          z-index: -1;
        }
      }
    }
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .education {
    height: 300px;
    width: 50%;
    background-color: #f5f4f4;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .edu-div {
    width: 70%;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .techstack {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 300px;
    width: 50%;
    background-color: #aa8465;
  }

  .stack-container {
    width: 70%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .tech-div {
    width: 80px;
    display: flex;
    flex-direction: column;
  }
`;
