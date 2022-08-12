import { useEffect, useState } from "react";
import { addquestion, updatequestion } from "./Redux/api";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function AddUser(props) {
  let navigate = useNavigate();
  let location = useLocation();
  const state = useSelector((state) => state.questionResucer);

  const [question_title, setquestionTitle] = useState("");
  const [question, setquestion] = useState("");
  const [question_type, setquestionType] = useState("");

  const [question_titleEr, setquestionTitleEr] = useState("");
  const [questionEr, setquestionEr] = useState("");
  const [question_typeEr, setquestionTypeEr] = useState("");

  function checkValidation() {
    let flag = true;
    if (question_title === "") {
      setquestionTitleEr("Pleas enter the name");
      flag = false;
    }
    if (question === "") {
      setquestionEr("Pleas enter the question");
      flag = false;
    }
    if (question_type === "") {
      setquestionTypeEr("Pleas enter the question_type no.");
      flag = false;
    }
    return flag;
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    if (checkValidation()) {
      const payload = {
        question_title,
        question,
        question_type,
        options: ["A", "B", "C", "D"],
      };
      if (location.pathname === "/edit-question" && state.question) {
        const res = await updatequestion(state.question._id, payload);
        if (res) {
          alert("data update sucessfully");
          navigate("/");
        }
      } else {
        const res = await addquestion(payload);
        if (res) {
          alert("data add sucessfully");
          setquestionTitle("");
          setquestion("");
          setquestionType("");
          navigate("/");
        }
      }
    }
  };

  useEffect(() => {
    if (location.pathname === "/edit-question" && state.question) {
      setquestionTitle(state.question.question_title);
      setquestion(state.question.question);
      setquestionType(state.question.question_type);
    }
  }, [state]);

  const redirectTo = () => {
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <div className="row justify-content-center">
        <div className="col-6">
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputName1">questionTitle</label>
              <input
                type="text"
                name="question_title"
                value={question_title}
                onChange={(e) => setquestionTitle(e.target.value)}
                onFocus={() => setquestionTitleEr("")}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter questionTitle"
              />
              <small style={{ color: "red" }}>
                {question_titleEr.length > 0 && question_titleEr}
              </small>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">question</label>
              <input
                type="text"
                name="question"
                value={question}
                onChange={(e) => setquestion(e.target.value)}
                onFocus={() => setquestionEr("")}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter question"
              />
              <small style={{ color: "red" }}>
                {questionEr.length > 0 && questionEr}
              </small>
            </div>
            <div>
              <label htmlFor="exampleInputPhome">questionType</label>
              <input
                type="text"
                name="question_type"
                value={question_type}
                onChange={(e) => setquestionType(e.target.value)}
                onFocus={() => question_typeEr("")}
                className="form-control"
                aria-describedby="emailHelp"
                placeholder="Enter questionType"
              />
              <small style={{ color: "red" }}>
                {question_typeEr.length > 0 && question_typeEr}
              </small>
            </div>

            <div>
              <br />
              <div className="container">
                <div className="text-center">
                  <button
                    onClick={onSubmit}
                    className="btn btn-primary btn-width-150"
                  >
                    Submit
                  </button>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <button
                    className="btn btn-primary btn-width-150"
                    onClick={redirectTo}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
