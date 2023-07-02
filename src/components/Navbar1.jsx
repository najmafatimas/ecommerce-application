import { useEffect, useState } from "react";
import { useHistory} from "react-router-dom";

const Navbar1 = () => {
  let history=useHistory();
 let [showProf,setShowProf]=useState({});
 useEffect(()=>{
  setShowProf(JSON.parse(sessionStorage.getItem('userDetails')));
},[])


console.log(showProf.userName)
 
    
  
    return ( <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/hello"><img src="e2logo.png" width="50px" height="50px" alt="Logo"></img></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/hello">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/about">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/contact">Contact</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle"  href="/" data-bs-toggle="dropdown" aria-expanded="false">
           Categories
          </a>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="/helloelectronics">Electronics</a></li>
            <li><a class="dropdown-item" href="/hellojewelery">Jewelery</a></li>
            <li><a class="dropdown-item" href="/hellomen's clothing">Men's clothing</a></li>
            <li><a class="dropdown-item" href="/hellowomen's clothing">Women's clothing</a></li>
          </ul>
        </li>
      </ul>
      <button type="button" className="userIcon" data-bs-toggle="modal" data-bs-target="#exampleModal">
      <i class="fa fa-user"></i>
      </button>
     
    </div>
  </div>
</nav>
 <div class="modal" tabindex="-1" id="exampleModal">
  <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">User Account</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      <div class="header">
      <i class="fa fa-user" style={{"font-size":"60px"}}></i>
    <div class="profile-name">{showProf.userName}</div>
    <div class="profile-username">@{showProf.userName}</div>
  </div>
  
 
  
  <div class="section">
    <div class="section-heading">Contact Information</div>
    <div class="section-content">
      Email: {showProf.emailId}<br/>
      Phone: {showProf.userPhoneNumber}<br/>
      Address: {showProf.userAddress},{showProf.userCity},{showProf.userState}<br/>
    </div>
  </div>
       
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>{
          sessionStorage.clear();
          history.push("/")
        }}>Logout</button>
        
      </div>
    </div>
  </div>
</div>
    </div> );
}
 
export default Navbar1;