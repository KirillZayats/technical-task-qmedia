import React from "react";
import {
  ButtonStyle,
  MessageTextStyle,
  ContainerModalStyle,
  ModalStyle,
} from "../../styles/modal/ModalStyled";
import { IPropsModal } from "../../additionally/interfaces";

const Modal: React.FC<IPropsModal> = ({
  active,
  setActive,
  error,
  setError,
}) => {
  const closeModal = () => {
    setActive(false);
    setError("");
  };

  return (
    <ModalStyle
      className={active ? "active" : ""}
      onClick={() => setActive(false)}
    >
      <ContainerModalStyle
        className={active ? "active" : "no-active"}
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <MessageTextStyle>{error}</MessageTextStyle>
        <ButtonStyle onClick={closeModal}>Хорошо</ButtonStyle>
      </ContainerModalStyle>
    </ModalStyle>
  );
};

export default Modal;
