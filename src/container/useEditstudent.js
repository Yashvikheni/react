import { baseUrl } from "../utils/Constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { text } from "../container/useFields";
const useEditStudent = () => {
  const history = useNavigate();
  let template = {
    title: "Edit Profile",
    fields: [text],
    buttonName: "Update",
  };
  async function handle(values) {
    const token = localStorage.getItem("userIn");
    await axios
      .put(`${baseUrl}student/studentProfile`, values, {
        headers: { "access-token": `${token}` },
      })
      .then((response) => {
        if (response.data.statusCode === 200) {
          history("../student");
        }
        alert(response.data.message);
      }) 
      .catch((error) => alert(error.message));
  }
  return [{ template, handle }];
};

export default useEditStudent;
