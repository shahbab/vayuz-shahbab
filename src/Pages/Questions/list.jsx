import { useEffect } from "react";
import { activequestion, editquestion, getquestion } from "./Redux/api";
// import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function UserList(props) {
  // const [questions, setquestion] = useState([]);
  const state = useSelector((state) => state.questionResucer);
  let navigate = useNavigate();

  // const onload = async () => {
  //   const res = await getquestion();
  //   setquestion(res);
  // };

  useEffect(() => {
    getquestion();
  }, []);

  function redirectTo() {
    navigate("/add-question");
  }

  async function ActiveInActive(id, status) {
    await activequestion(id, { is_active: !status });
    getquestion();
  }

  async function Editquestion(question) {
    editquestion(question);
    navigate("/edit-question");
  }

  console.log(state);
  return (
    <div className="container mt-4">
      <div className="add-question">
        <button className="btn btn-primary btn-width-150" onClick={redirectTo}>
          Add question
        </button>
      </div>
      <br />
      <div>
        <table className="table">
          <tbody>
            <tr>
              <th> id</th>
              <th>Title</th>
              <th>question</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
            {state.questions.map((e, i) => {
              return (
                <tr key={e.id}>
                  <td> {e.question_id} </td>
                  <td>{e.question_title}</td>
                  <td> {e.question} </td>
                  <td>
                    {e.is_active ? (
                      <span style={{ color: "green" }}>Active</span>
                    ) : (
                      <span style={{ color: "red" }}>In Active</span>
                    )}
                    &nbsp; &nbsp;
                    <button
                      className="btn btn-primary"
                      onClick={() => ActiveInActive(e._id, e.is_active)}
                    >
                      update Status
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-primary"
                      onClick={() => Editquestion(e)}
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
