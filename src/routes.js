import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import QuestionList from "./Pages/Questions";
import Addquestion from "./Pages/Questions/addQuestion";

export default function RoutesComponent() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<QuestionList />} />
        <Route path="/add-question" element={<Addquestion />} />
        <Route path="/edit-question" element={<Addquestion />} />
      </Routes>
    </BrowserRouter>
  );
}
