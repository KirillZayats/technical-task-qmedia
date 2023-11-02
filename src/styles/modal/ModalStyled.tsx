import { styled } from "styled-components";

const ModalStyle = styled.div`
  background-color: rgba(0, 0, 0, 0.4);
  height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transform: scale(0);
  z-index: 2;
  transform: scale(0);

  &.active {
    transform: scale(1);
  }
`;

const ContainerModalStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  width: 250px;
  padding: 20px;
  border-radius: 12px;
  background: ${({ theme }) => theme.colors.BUTTON_MAIN_COLOR};

  &.no-active {
    transform: scale(0);
    transition: all 0.3s ease-out;
  }

  &.active {
    transform: scale(1);
    transition: all 0.3s ease-out;
  }
`;

const MessageTextStyle = styled.p`
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.TEXT_SECOND_COLOR};
`;
const ButtonStyle = styled.button`
  height: 40px;
  font-size: 18px;
  font-weight: 700;
  width: 100%;
  background: ${({ theme }) => theme.colors.BUTTON_SECOND_COLOR};
  color: ${({ theme }) => theme.colors.BUTTON_MAIN_COLOR};
  text-align: center;
  border: 1px solid ${({ theme }) => theme.colors.BUTTON_MAIN_COLOR};
  border-radius: 5px;

  &:hover {
    background: ${({ theme }) => theme.colors.TEXT_MARK_PRICE_COLOR};
    color: ${({ theme }) => theme.colors.TEXT_SECOND_COLOR};
  }
`;

export { ButtonStyle, MessageTextStyle, ContainerModalStyle, ModalStyle };
