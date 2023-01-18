import axios from "axios";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../components/context/AuthContext";
import "../../pages/login/Login.css";

 const Login = () => {
  const navigate = useNavigate()
  const [errorFromServer, setErrorFromServer] = useState()

    async function handleLogin(ev: any) {
        try {
          ev.preventDefault();
          const password = ev.target.elements.password.value;
          const email = ev.target.elements.email.value;
          console.log(password, email);
      
           //@ts-ignore
           const { data } = await axios.post("/admin/login", { password, email });
           console.log(data);
           const {ok, error} = data;

           if(ok){
            navigate('/booking')
           }

           if(error) {
            setErrorFromServer(error)
           }
        } catch (error) {
          console.error(error);
        }
      }
      


  return (
    <div className="login">
      <form onSubmit={handleLogin} className="lContainer">
        <h1 className="signTitle">Login</h1>
        <input
          type="text"
          placeholder="Email"
          name="email"
          className="lInput"
        />
        <input
          type="password"
          placeholder="password"
          name="password"
          className="lInput"
        />
        {errorFromServer ? <div className="error">{errorFromServer}</div> : null}
        <button  type="submit" className="lButton">
          Login
        </button>
        <h4 className="joinTitle" >Still not one of us? <button className="sign" onClick={()=>navigate('/register')}>Join now</button></h4>
        </form>
        </div>
  );
};

export default Login