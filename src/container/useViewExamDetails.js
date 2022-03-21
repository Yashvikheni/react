import React, { useEffect, useState } from "react";
import { baseUrl } from "../utils/Constant";
import axios from "axios";
import { useNavigate, useLocation } from "react-router-dom";
const useViewExamDetails = ({ notes }) => {
  const history = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({});
  const [state, setState] = useState({});
  const key = data && data.length ? Object.keys(data[0]) : [];
  const id = location.search.replace("?id=", "");
  useEffect(() => {
    const api = `dashboard/Teachers/examDetail`;
    fetch({ api });
  }, []);
  async function fetch({ api }) {
    const token = localStorage.getItem("userIn");
    await axios
      .get(`${baseUrl}${api}?id=${id}`, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        setData(response.data.data.questions);
      })
      .catch((error) => alert(error.message));
  }
  const Edit = (val, index) => {
    const subject = localStorage.getItem("subject");
    state.options = val[0].val;
    state.question = val[1].val;
    state.answer = val[2].val;
    const ind = index + 1;
    history("../createexam", {
      state: {
        data: state,
        index: ind,
        eQuestions: data,
        subject: subject,
        notes: notes,
      },
    });
  };
  return [{ data, Edit, key }];
};

export default useViewExamDetails;
