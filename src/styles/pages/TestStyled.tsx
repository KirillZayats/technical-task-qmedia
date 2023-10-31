import styled from "styled-components";
import { device, size } from "../media/MediaQueryStyled";

const TestStyle = styled.main`
  display: flex;
  flex-direction: column;

  @media ${device.mobileS} {
    margin: 30px 10px;
    gap: 20px;
    max-width: 100%;
  }

  @media ${device.mobileM} {
    margin: 30px 20px;
  }

    @media ${device.mobileL} {
      margin: 30px auto;
      max-width: calc(${size.mobileL} - 40px);
  }

  @media ${device.tablet} {
    margin: 50px auto;
    gap: 34px;
    max-width: calc(${size.tablet} - 100px);
  }

  @media ${device.tabletS} {
    margin: 50px auto;
    max-width: calc(${size.tabletS} - 80px);
  }

  @media ${device.laptop} {
    max-width: calc(${size.laptop} - 100px);
  }

  @media ${device.desktop} {
    margin: 50px 50px 94px;
    max-width: 100%;
  }
`;
const TitlePage = styled.h2`


`;
const DescriptionText = styled.p`
  max-width: 583px;
  width: 100%;
  font-weight: 400;

  @media ${device.mobileS} {
    font-size: 18px;
  }

  @media ${device.tablet} {
    font-size: 20px;
  }
`

export {
    DescriptionText, TitlePage, TestStyle
}