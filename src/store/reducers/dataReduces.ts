import { DataAction, DataActionType } from "../types/types";


const initialState = {
  isLoadingQuestions: false,
  isLoadingProducts: false,
  products: [],
  questions: [],
};

export const dataReducer = (state = initialState, action: DataAction) => {
  switch (action.type) {
    
    case DataActionType.GET_PRODUCTS:
      return {
        isLoadingProducts: action.isLoading,
        isLoadingQuestions: state.isLoadingQuestions,
        products: [...action.products],
        questions: state.questions
      };
    case DataActionType.GET_QUESTIONS:
      return {
        isLoadingProducts: state.isLoadingProducts,
        isLoadingQuestions: action.isLoading,
        products: state.products,
        questions: action.questions
      };
    default:
      return state;
  }
};
