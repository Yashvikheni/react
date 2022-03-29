import { useState, useEffect } from "react";
import {
  isNullish,
  EqualObj,
  reset,
  hasDuplicates,
  checkAns,
  confirmAlert,
} from "../utils/Regex";
import { Update, submit } from "../container/useApiCall";
import { Exam } from "../container/useFields";
import { useNavigate } from "react-router-dom";
const useCreateExam = ({ final, state, examIndex, data }) => {
  const [index, setIndex] = useState(
    examIndex ? examIndex : state ? Number(state.index) : 1
  );
  const [ind, setInd] = useState(-1);
  const [pre, setPre] = useState({});
  const history = useNavigate();
  const [valuee, setValuee] = useState({
    question: "",
    answer: "",
    ans1: "",
    ans2: "",
    ans3: "",
    ans4: "",
    notes: "",
  });
  useEffect(() => {
    if (!data) return;
    fetch(index - 1);
    setInd(index - 2);
  }, [data]);
  useEffect(() => {
    if (state) {
      final.questions = state.eQuestions;
      final.subjectName = final.subjectName && state.subject;
      final.notes = state.notes;
      fetch(index - 1);
      setInd(index - 2);
    } else {
      return;
    }
  }, []);
  const losingNotes = (data1, valuee) => {
    if (data1) {
      if (isNullish(data1)) {
        if (valuee.notes === "") {
          alert("you are losing your data");
        }
      }
    }
  };
  const Next = (data1) => {
    if (!data && index <= 15) {
      const options = handleOptions(valuee);
      if (!checkAns(options, valuee.answer)) {
        alert("answer is not matched with options");
        return;
      } else {
        setIndex(index + 1);
        setInd(ind + 1);
        fetch(index, data1);
      }
      losingNotes(data1, valuee);
    } else if (data && index <= 6) {
      final[index - 1].question = valuee.question;
      if (valuee.answer) {
        if (valuee.answer !== final[index - 1].answer) {
          alert("your answer is not saved");
        }
      } else {
        final[index - 1].answer !== " " && alert("your answer is not saved");
      }
      setIndex(index + 1);
      localStorage.setItem("index", index + 1);
      setInd(ind + 1);
      fetch(index, data1);
    }
  };
  const Prevs = (data1) => {
    if (!data && index >= 2) {
      const options = handleOptions(valuee);
      if (!checkAns(options, valuee.answer)) {
        alert("answer is not matched with options");
        return;
      } else {
        setIndex(index - 1);
        setInd(ind - 1);
        fetch(ind, data1);
      }
    } else if (index >= 2) {
      if (valuee.answer) {
        if (valuee.answer !== final[index - 1].answer) {
          alert("your answer is not saved");
        }
      } else {
        final[index - 1].answer !== " " && alert("your answer is not saved");
      }
      setIndex(index - 1);
      setInd(ind - 1);
      localStorage.setItem("index", index - 1);
      fetch(ind, data1);
    }
  };
  const fetch = (i, data1) => {
    let preQ;
    preQ = data ? data[i] : final.questions.at(i);
    setPre(preQ);
    if (data1 && !data) {
      handleAlert(data1);
    }
    if (preQ) {
      if (preQ.options[0]) {
        setValuee({
          question: preQ.question,
          answer: examIndex
            ? final[i].answer !== " "
              ? final[i].answer
              : ""
            : preQ.answer,
          ans1: preQ.options[0],
          ans2: preQ.options[1],
          ans3: preQ.options[2],
          ans4: preQ.options[3],
          notes: examIndex ? "yashvi" : final.notes[i] ? final.notes[i] : " ",
        });
      } else {
        setValuee(reset(valuee));
        setPre(reset(pre));
      }
    }
  };
  let template = {
    fields: [
      state || examIndex
        ? {
            type: null,
          }
        : {
            title: "subjectName",
            type: "dropDown",
            name: "subjectName",
            options: ["English", "Maths", "Node", "React", "Flutter"],
            placeholder: "subjectName",
          },
      { ...Exam.question },
      { ...Exam.option },
      { ...Exam.answer },
      examIndex
        ? {
            type: null,
          }
        : {
            title: "notes",
            type: "text",
            name: "notes",
            placeholder: "notes",
          },
    ],
    buttonName: state
      ? "Update"
      : examIndex
      ? final.length > 0 && final[index - 1].answer !== " "
        ? "UPDATE"
        : index === 7
        ? "PREVIEW"
        : valuee.answer
        ? "CONFIRM"
        : "SKIP"
      : index === 15
      ? "CREATE"
      : isNullish(pre)
      ? "ADD"
      : "Update",
    button: ["Prev", "Next", "Clear"],
  };
  const queCheck = (values) => {
    let a;
    let arr = final.questions && final.questions.map((key) => key.question);
    arr &&
      arr.map((value, index) => {
        if (index !== ind + 1) {
          if (value === values.question) {
            a = true;
          }
        }
      });
    return a;
  };

  const handleOptions = (values) => {
    const { ans1, ans2, ans3, ans4 } = values;
    let option = [];
    option[0] = ans1;
    option[1] = ans2;
    option[2] = ans3;
    option[3] = ans4;
    return option;
  };
  const handleAlert = (data1) => {
    if (state) {
      if (valuee.question !== "") {
        if (valuee.notes === "") {
          alert("you are losing your data");
        }
      }
    }
    valuee.notes === " " && delete valuee["notes"];
    data1 && data1.notes === " " && delete data1["notes"];
    if (!isNullish(valuee)) {
      const val = { ...valuee };
      showAlert(val);
    } else if (data1) {
      if (!isNullish(data1)) {
        const val = { ...data1 };
        showAlert(val);
      }
    }
  };
  const showAlert = (val) => {
    val.options = handleOptions(val);
    const notes = val.notes;
    if (!isNullish(final.questions.at(index - 1)) || !isNullish(valuee)) {
      ["ans1", "ans2", "ans3", "ans4", "subjectName", "notes"].forEach(
        (e) => delete val[e]
      );
      const result = EqualObj(val, final.questions.at(index - 1));
      const r2 = notes ? (notes === final.notes[index - 1] ? true : false) : "";
      if (!result || r2 === false) {
        alert("you are losing your data");
      }
    }
  };
  const Format = (values) => {
    const value = final.questions.at(index - 1);
    value.question = values.question;
    value.answer = values.answer;
    value.options = handleOptions(values);
    final.notes[index - 1] = values.notes ? values.notes : " ";
  };
  const handle = (values, add) => {
    if (examIndex) {
      if (final[index - 1].answer !== " ") {
        const ans = confirmAlert();
        if (ans) {
          final[index - 1].answer = values.answer === "" ? " " : values.answer;
          localStorage.setItem("final", JSON.stringify(final));
          Next();
        } else {
          return;
        }
      } else {
        final[index - 1].question = values.question;
        final[index - 1].answer = values.answer ? values.answer : " ";
        localStorage.setItem("final", JSON.stringify(final));
        Next();
      }
      if (index === 7) {
        history("../preview")
        
     
      }
    } else {
      let options = handleOptions(values);
      if (index <= 15) {
        if (!checkAns(options, values.answer)) {
          alert("answer is not matched with options");
          return;
        }
        if (queCheck(values)) {
          alert("Question already exist");
          return;
        } else if (hasDuplicates(options)) {
          alert("options should be unique");
          return;
        }
        if (isNullish(pre)) {
          Format(values);
          add();
          index <= 14 && setIndex(index + 1);
          ind <= 13 && setInd(ind + 1);
        } else {
          const ans = confirmAlert();
          if (ans) {
            Format(values);
            Next();
          } else {
            return;
          }
        }
        if (state) {
          final.subjectName = state.subject;
        } else if (index === 1) {
          if (values.subjectName) {
            final.subjectName = values.subjectName;
          }
        }
        if (index === 15) {
          state ? Update(final, history) : submit(final, history);
        }
      }
    }
  };
  return [{ template, handle, valuee, index, setValuee, Prevs, Next, final }];
};
export default useCreateExam;
