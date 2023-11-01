import { firebaseConfig } from "../../utils/db";
import { getDatabase, ref, get, child } from "firebase/database";
import { initializeApp } from "firebase/app";
import { Dispatch } from "redux";
import { DataActionType } from "../types/types";
import { Data } from "../../additionally/interfaces";

export const getProducts = (data: Data[]) => {  
  return {
    type: DataActionType.GET_PRODUCTS,
    isLoading: true,
    products: data,
  };
};

export const getQuestions = (data: Data[]) => {
  return {
    type: DataActionType.GET_QUESTIONS,
    isLoading: true,
    questions: data  
  };
};

export const getData = (path: string) => {
  
  initializeApp(firebaseConfig);
  let data: Array<Array<Data>> = [];

  const dbRef = ref(getDatabase());

  return async (dispatch: Dispatch) => {
    get(child(dbRef, `/${path}`))
      .then((snapshot) => {
        if (snapshot.exists()) {
          data.push(snapshot.val());
        } else {
          console.log("No data available");
        }
      })
      .then(() => {  
              
        switch (path) {
          case 'products':
            dispatch(getProducts(data[0]));
            break;
            case 'questions':
              dispatch(getQuestions(data[0]));

            break;
         }
      })
      .catch((error) => {
        console.error(error);
      });
  };
};
