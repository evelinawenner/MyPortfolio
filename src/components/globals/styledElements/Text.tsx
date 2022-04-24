import styled from "styled-components";

export const MainHeading = styled.h1`
  font-size: 4rem;
  font-family: Fredoka One;
  color: #aa8465;
  -webkit-text-fill-color: transparent;
  -webkit-text-stroke: 1px #aa8465;
`;

export const Heading = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: 600;
  font-family: Lato, sans-serif;
  color: #212121;
`;

interface IPProps {
  fontWeight?: string;
}
export const P = styled.p`
  font-size: 14px;
  margin: 0;
  font-family: Lato, sans-serif;
  font-weight: ${(props: IPProps) => props.fontWeight || "400"};
  color: #212121;
`;
