import { useEffect, useState } from "react";
const Navbar1 = () => {
  
 let [showProf,setShowProf]=useState({});
 useEffect(()=>{
  setShowProf(JSON.parse(sessionStorage.getItem('userDetails')));
},[])


console.log(showProf.userName)
 
    
  
    return ( <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="/hello">Ecommerce</a>
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
          <button class="nav-link dropdown-toggle"   data-bs-toggle="dropdown" aria-expanded="false">
           Categories
          </button>
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
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">User Account</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      
       
     
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" >Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div> );
}
 
export default Navbar1;