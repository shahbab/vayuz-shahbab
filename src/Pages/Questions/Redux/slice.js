import { createSlice } from "@reduxjs/toolkit";

export const initial = {
  questions: [
    {
      id: 1,
      question_id: "2",
      question_title: "javaScript",
      question: "what is java",
      question_type: "Jave",
    },
  ],
  question: {},
};

const Slice = createSlice({
  name: "questionSlice",
  initialState: initial,
  reducers: {
    updatequestions: (state, action) => {
      state.questions = action.payload;
    },
    updatequestion: (state, action) => {
      state.question = action.payload;
    },
  },
});

export const questionAction = Slice.actions;
export const questionResucer = Slice.reducer;
