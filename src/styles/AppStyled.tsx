import { createGlobalStyle, styled } from "styled-components";
import { device } from "../styles/media/MediaQueryStyled";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none; 
    scroll-behavior: smooth;
  }

  body {
    background: ${({ theme }) => theme.colors.MAIN_BG_COLOR};
    font-family: 'Inter', sans-serif;
    font-style: normal;
    line-height: normal;
  }

  h2 {
    font-weight: 700;

    @media ${device.mobileS} {
      font-size: 32px;
    }

    @media ${device.tablet} {
      font-size: 36px;
    }

    @media ${device.laptop} {
      font-size: 40px;
    }
  }

  li {
    list-style: none;
  }


  a {
    display: inline-block;
    text-decoration: none;
  }

  a, button {
    cursor: pointer;
  }

  span, path, a, p, img, svg, button {
    transition: All .3s ease-out;
  }
`;

const ButtonStyle = styled.button`
  padding: 10px 15px;

  border-radius: 5px;
  border: 0px solid;
  font-weight: 700;
  font-family: "Inter", sans-serif;

  @media ${device.mobileS} {
    font-size: 14px;
  }

  @media ${device.mobileM} {
    font-size: 15px;
  }
`;

const BackButton = styled(ButtonStyle)`
  background: ${({ theme }) => theme.colors.BUTTON_SECOND_COLOR};
  color: ${({ theme }) => theme.colors.TEXT_COLOR};

  &:hover {
    background: ${({ theme }) => theme.colors.TEXT_MARK_PRICE_COLOR};
    color: ${({ theme }) => theme.colors.TEXT_SECOND_COLOR};
  }
`;

const NextButton = styled(ButtonStyle)`
  background: ${({ theme }) => theme.colors.BUTTON_MAIN_COLOR};
  color: ${({ theme }) => theme.colors.TEXT_SECOND_COLOR};

  &:hover {
    background: ${({ theme }) => theme.colors.PANEL_COLOR};
    color: ${({ theme }) => theme.colors.TEXT_COLOR};
  }
`;

const ContainerProvider = styled.div`
  .transition-page-enter {
    opacity: 0;
    transform: translate(0, 25px);
    z-index: 1;
  }
  .transition-page-enter.transition-page-enter-active {
    opacity: 1;
    transform: translate(0, 0);

    transition: opacity 250ms ease-out, transform 300ms ease;
  }
  .transition-page-exit {
    opacity: 1;
    transform: translate(0, 0);
  }
  .transition-page-exit.transition-page-exit-active {
    opacity: 0;
    transform: translate(0, 30px);

    transition: opacity 250ms ease-out, transform 300ms ease;
  }
`;

export { GlobalStyle, BackButton, NextButton, ContainerProvider };
