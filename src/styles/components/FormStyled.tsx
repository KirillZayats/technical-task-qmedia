import styled from "styled-components";
import { device } from "../media/MediaQueryStyled";

const FormStyle = styled.form`
  background: ${({ theme }) => theme.colors.FROM_BG_COLOR};
  max-width: 868px;
  width: 100%;
  border-radius: 10px;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  @media ${device.mobileS} {
    margin: 20px 20px 40px;
    gap: 20px;
  }

  @media ${device.mobileM} {
    margin: 30px 30px 50px;
    gap: 30px;
  }

  @media ${device.tablet} {
    margin: 35px 35px 65px;
    gap: 38px;
  }
`;

const ContainerQuestions = styled.section`
  display: flex;
  flex-direction: column;
  position: relative;

  @media ${device.mobileS} {
    min-height: 350px;
  }

  @media ${device.tablet} {
    min-height: 300px;
  }

  .transition {
    position: absolute;
  }

  .transition-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .transition-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 300ms, transform 300ms;
  }

  .transition-exit {
    opacity: 1;
    transform: scale(1);
  }

  .transition-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 300ms, transform 300ms;
  }
`;

const Question = styled.h3`
  font-size: 20px;
  font-weight: 700;
  transition: all 0.5s ease-out;
`;

const NavQuestion = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const ListQuestions = styled.ul`
  display: flex;
  flex-direction: row;
  gap: 10px;

  .active {
    background: ${({ theme }) => theme.colors.BUTTON_MAIN_COLOR};
  }
`;
const ElementQuestion = styled.li`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.PANEL_COLOR};
  transition: all 0.5s ease-out;
`;

const PositionQuestion = styled.span`
  font-size: 15px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.TEXT_MARK_COLOR};
`;

const ContainerButtons = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin-top: auto;
`;

const ListOptionQuestions = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media ${device.mobileS} {
    margin-top: 20px;
  }

  @media ${device.tablet} {
    margin-top: 33px;
  }
`;

const OptionQuestion = styled.label`
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

const CheckBox = styled.input`
  width: 15px;
  height: 15px;
  border: 1.5px solid ${({ theme }) => theme.colors.TEXT_MARK_COLOR};
  background: ${({ theme }) => theme.colors.BUTTON_SECOND_COLOR};
  cursor: pointer;

  &:focus {
    background: ${({ theme }) => theme.colors.BUTTON_MAIN_COLOR};
    border: 1.5px solid ${({ theme }) => theme.colors.BUTTON_MAIN_COLOR};
  }
`;

const TextQuestion = styled.span`
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  cursor: pointer;
`;

export {
  TextQuestion,
  CheckBox,
  FormStyle,
  OptionQuestion,
  ListOptionQuestions,
  ListQuestions,
  ContainerButtons,
  PositionQuestion,
  ElementQuestion,
  NavQuestion,
  Question,
  ContainerQuestions,
  Content,
};
