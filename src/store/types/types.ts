import { IProduct, IQuestion } from "../../additionally/interfaces";

export enum DataActionType {
    GET_PRODUCTS = "GET_PRODUCTS",
    GET_QUESTIONS = "GET_QUESTIONS",
  }
  
  export interface IGetProductsAction {
    type: DataActionType.GET_PRODUCTS;
    isLoading: boolean;
    products: IProduct[];
  }

  export interface IGetQuestionsAction {
    type: DataActionType.GET_QUESTIONS;
    isLoading: boolean;
    questions: IQuestion[];
  }

  export type DataAction = IGetProductsAction | IGetQuestionsAction;

