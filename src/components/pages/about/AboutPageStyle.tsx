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
      color: #45818e;
      text-decoration: none;

      &:hover {
        color: #0c343d;
      }
    }
  }

  .row {
    display: flex;
    flex-direction: row;
  }

  .education {
    height: 400px;
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
    height: 400px;
    width: 50%;
    background-color: #aa8465;
  }
`;
