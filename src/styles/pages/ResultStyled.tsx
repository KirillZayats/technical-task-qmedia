import styled from "styled-components";
import { device, size } from "../media/MediaQueryStyled";

const ResultStyle = styled.main`
  display: flex;
  flex-direction: column;

  @media ${device.mobileS} {
    margin: 30px 10px;
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

const TitlePage = styled.h2``;
const DescriptionText = styled.p`
  max-width: 583px;
  width: 100%;
  font-weight: 400;
  @media ${device.mobileS} {
    font-size: 18px;
    margin-top: 20px;
  }

  @media ${device.tablet} {
    font-size: 20px;
    margin-top: 25px;
  }
  @media ${device.desktop} {
    font-size: 20px;
    margin-top: 34px;
  }
`;

const ListProducts = styled.ul`
display: flex;
flex-direction: row;
row-gap: 40px;
flex-wrap: wrap;

@media ${device.mobileS} {
    margin: 30px auto;
  }

  @media ${device.tablet} {
    justify-content: space-between;
    margin: 40px auto;
  }
  @media ${device.tabletS} {
    justify-content: start;
    column-gap: 15px;
  }

  @media ${device.laptop} {
    column-gap: 55px;
  }

  @media ${device.desktop} {
    column-gap: 35px;
    margin: 65px auto;
  }
`;

const ElementListProduct = styled.li``;

const NavProducts = styled.nav`
  display: flex;
  flex-direction: row;
  gap: 12px;

  .active {
    color: ${({ theme }) => theme.colors.BUTTON_MAIN_COLOR};

  }
`;

const LinkPage = styled.span`
  font-size: 20px;
font-weight: 400;
color: ${({ theme }) => theme.colors.TEXT_MARK_PRICE_COLOR};
`;

export {
    LinkPage, NavProducts, ElementListProduct, ListProducts, TitlePage, DescriptionText, ResultStyle
}