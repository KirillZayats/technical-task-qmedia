import { ThemeProvider } from "styled-components";
import React from "react";
import { PropsTheme } from "../additionally/interfaces";

const standartTheme = {
  colors: {
    FROM_BG_COLOR: "#DDF3FF",
    BUTTON_MAIN_COLOR: "#00A5FF",
    BUTTON_SECOND_COLOR: "#FFFFFF",
    TEXT_COLOR: "#000000",
    TEXT_MARK_COLOR: "#9A9A9A",
    TEXT_MARK_PRICE_COLOR: "#B8B8B8",
    TEXT_SECOND_COLOR: "#FFFFFF",
    BORDER_COLOR: "#E9E9E9",
    PANEL_COLOR: "#89D1F8",
    FILL_ICON: "#ff0000",

  },
};

export const Theme: React.FC<PropsTheme> = ({ children }) => {
  return <ThemeProvider theme={standartTheme}>{children}</ThemeProvider>;
};