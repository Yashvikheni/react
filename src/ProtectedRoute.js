import React,{ useEffect} from "react";
import { useNavigate } from "react-router-dom";

function ProtectedRoute(props) {
let Com=props.comp
const history=useNavigate()
  useEffect(() => {
     const isAuthenticated = localStorage.getItem("userIn");
     if(!isAuthenticated){
       history("../login")
     }
  },[])

  return (
<div>
  {<Com/>}
</div>
  );
}

export default ProtectedRoute;

