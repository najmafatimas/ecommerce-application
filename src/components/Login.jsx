import { useHistory} from "react-router-dom";

import { useRef } from "react";



const Login = () => {
    let username = useRef();
    let password = useRef();
    let history=useHistory();
    let loginUser=(e)=>{
        e.preventDefault();
        let usersData=JSON.parse(localStorage.getItem('users'));
        let userInfo={};
        if(usersData !==null )
        {
            console.log(username,password);
            for(let i=0;i<usersData.length;i++)
            {
            if(usersData[i].userName===username.current.value && usersData[i].userPassword===password.current.value)
            {
                // alert("login Successfull");
                // history.push("/hello")
                userInfo=usersData[i];
            }
           
          }
        }
        if(userInfo===undefined)
        {
          alert("please signup first");
          history.push("/")
        }
       else
       {
        alert("login successfully");
        sessionStorage.setItem('userDetails',JSON.stringify(userInfo));
        history.push("/hello");
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
    <button type="submit" class="btn btn-dark">Login</button>
  </div>
  </form>
 
  </div> );
}
 
export default Login;