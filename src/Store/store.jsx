import { configureStore } from "@reduxjs/toolkit";
import thunk from "redux-thunk";
import { questionResucer } from "../Pages/Questions/Redux/slice";

export const store = configureStore({
  reducer: {
    questionResucer,
  },
  middleware: [thunk],
});
