import styled from "styled-components";

export const MainHeading = styled.h1`
  margin: 0;
  font-size: 6rem;
  font-family: Josefin sans, sans-serif;
  font-weight: 700;
  color: #aa8465;
`;

export const Heading = styled.p`
  margin: 0;
  font-size: 30px;
  font-weight: 600;
  font-family: Playfair Display, serif;
  color: #212121;
`;

interface IPProps {
  fontWeight?: string;
}
export const P = styled.p`
  font-size: 14px;
  margin: 0;
  padding: 0;
  font-family: Lato, sans-serif;
  font-weight: ${(props: IPProps) => props.fontWeight || "400"};
  color: #212121;
`;
