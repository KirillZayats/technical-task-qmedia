import { DataAction, DataActionType } from "../types/types";

const initialState = {
  isLoadingQuestions: false,
  isLoadingProducts: false,
  products: [],
  questions: [],
  answers: [""],
};

export const dataReducer = (state = initialState, action: DataAction) => {
  switch (action.type) {
    case DataActionType.GET_PRODUCTS:
      return {
        isLoadingProducts: action.isLoading,
        isLoadingQuestions: state.isLoadingQuestions,
        products: [...action.products],
        questions: state.questions,
        answers: state.answers,
      };
    case DataActionType.GET_QUESTIONS:
      return {
        isLoadingProducts: state.isLoadingProducts,
        isLoadingQuestions: action.isLoading,
        products: state.products,
        questions: action.questions,
        answers: state.answers,
      };
    case DataActionType.SET_ANSWERS:
      return {
        isLoadingProducts: state.isLoadingProducts,
        isLoadingQuestions: state.isLoadingQuestions,
        products: state.products,
        questions: state.questions,
        answers: action.answers,
      };
    default:
      return state;
  }
};
