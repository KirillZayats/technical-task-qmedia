import { combineReducers } from "redux";
import { dataReducer } from "./dataReduces";

export const rootReducer = combineReducers({
  data: dataReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
