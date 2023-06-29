import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";
import Navbar from "./Navbar";
import SignUpCredentials from "./SignUpCredentials";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Login = () => {
    let username = useRef();
    let password = useRef();
    let history=useHistory();
    let loginUser=(e)=>{
        e.preventDefault();
        let userDetails=JSON.parse(localStorage.getItem('userDetails'));
        if(userDetails !==null )
        {
            console.log(username,password);
            if(userDetails.username===username.current.value && userDetails.password===password.current.value)
            {
                alert("login Successfull");
                history.push("/hello")
            }
            else
            {
                alert("please provide proper crendentials");
            }
        }
       

    }
    return ( <div><form class="row g-3" onSubmit={loginUser}>
    <div class="col-12">
      <label for="username" class="form-label">UserName</label>
      <input type="text" class="form-control" id="username" ref={username}/>
    </div>
    <div class="col-12">
      <label for="password" class="form-label">Password</label>
      <input type="password" class="form-control" id="password" ref={password} />
    </div>
    <div class="col-12">
    <button type="submit" class="btn btn-primary">Login</button>
  </div>
  </form>
  </div> );
}
 
export default Login;