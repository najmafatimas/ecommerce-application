import { useHistory, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useRef } from "react";
const SignUpCredentials = () => {
  let username = useRef();
  let email = useRef();
  let password = useRef();
  let phoneNumber  = useRef();
  let address=useRef();
  let city=useRef();
  let state=useRef();
  let zip=useRef();
  let history = useHistory();
//  let addUser=(e)=>{
//   e.preventDefault();
//    const newObj={
//     username:username.current.value,
//     email:email.current.value,
//     password:password.current.value,
//     address:address.current.value,
//     city:city.current.value,
//     state:state.current.value,
//     zip:zip.current.value
//    }
//    const existingData = localStorage.getItem('users');
//    let storedData = existingData ? JSON.parse(existingData) : [];
//     storedData.push(newObj);
//    localStorage.setItem('users', JSON.stringify(storedData));
     
//    if(JSON.parse(existingData)!==null)
//    {
//       alert("signed up successfully")
//       history.goBack();

//    }

   
  // }
  let addUser = (e) => {
    e.preventDefault();
  
    const userName = username.current.value;
    const emailId = email.current.value;
    const userPassword = password.current.value;
    const userAddress = address.current.value;
    const userCity = city.current.value;
    const userState = state.current.value;
    const userZip = zip.current.value;
  
    const existingData = localStorage.getItem('users');
    const storedData = existingData ? JSON.parse(existingData) : [];
    const newId = storedData.length > 0 ? storedData[storedData.length - 1].id + 1 : 1; // Generate the next ID
  
    const newObj = {
      id: newId,
      userName,
      emailId,
      userPassword,
      userAddress,
      userCity,
      userState,
      userZip,
    };
  
    storedData.push(newObj);
    localStorage.setItem('users', JSON.stringify(storedData));
   
    if (username !== null) {
      alert('Signed up successfully');
      history.goBack();
    }
    
    
  }
    return ( <div>
      
       <form class="row g-3" onSubmit={addUser}>
  <div class="col-md-6">
    <label for="username" class="form-label">UserName</label>
    <input type="text" class="form-control" id="username" ref={username}/>
  </div>
  <div class="col-md-6">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" ref={email}/>
  </div>
  <div class="col-6">
    <label for="password" class="form-label">New Password</label>
    <input type="password" class="form-control" id="password" ref={password}/>
  </div>
  <div class="col-6">
    <label for="number" class="form-label">Phone Number</label>
    <input type="tel" class="form-control" id="number" ref={phoneNumber}/>
  </div>
  <div class="col-12">
    <label for="address" class="form-label">Address</label>
    <input type="text" class="form-control" id="address" ref={address}/>
  </div>
  <div class="col-md-6">
    <label for="city" class="form-label">City</label> 
    <input type="text" class="form-control" id="city" ref={city}/>
  </div>
  <div class="col-md-4">
    <label for="state" class="form-label">State</label>
    <input type="text" class="form-control" id="state" ref={state}/>
  </div>
  <div class="col-md-2">
    <label for="zip" class="form-label">Zip</label>
    <input type="text" class="form-control" id="zip" ref={zip}/>
  </div>
 
  <div class="col-12">
    <button type="submit" class="btn btn-primary">Sign Up</button>
  </div>
</form>
    </div> );
}
 
export default SignUpCredentials;