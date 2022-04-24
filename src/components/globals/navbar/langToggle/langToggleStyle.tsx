import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;

  img {
    height: 50px;
    width: auto;
    margin-left: 20px;

    &:hover {
      cursor: pointer;
    }
  }
`;
