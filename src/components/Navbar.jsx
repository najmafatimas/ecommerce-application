import {useState} from 'react'

import SignUpCredentials from './SignUpCredentials';

import Login from './Login';



const Navbar = () => {
// Sign Up details
 

// Login details

// let username1 = useRef();
// let password1 = useRef();

// let loginUser=(e)=>{
//   e.preventDefault();
//   let usersData=JSON.parse(localStorage.getItem('users'));
//   let userInfo={};
//   if(usersData !==null )
//   {
//       console.log(username1,password1);
//       for(let i=0;i<usersData.length;i++)
//       {
//       if(usersData[i].userName===username1.current.value && usersData[i].userPassword===password1.current.value)
//       {
//           // alert("login Successfull");
//           // history.push("/hello")
//           userInfo=usersData[i];
//       }
     
//     }
//   }
//   if(userInfo===undefined)
//   {
//     alert("please signup first");
//     history.push("/")
//   }
//  else
//  {
//   alert("login successfully");
//   sessionStorage.setItem('userDetails',JSON.stringify(userInfo));
//   history.push("/hello");
//  }

// }

  
 














  
    const [showpop, setShowpop]=useState(false);
    const [showpopLogin,setShowpopLogin]=useState(false);
    return ( <div>
        <nav class="navbar">
        <a class="navbar-brand" href="/"><img src="e1logo.png" width="100px" height="100px" alt="Logo"></img></a>
            <ul class="nav justify-content-end">
    <li class="nav-item">
      <button class="nav-link"  onClick={()=>{setShowpopLogin(true)}}>Sign Up</button>
    </li>
    <li class="nav-item">
      <button class="nav-link" onClick={()=>{setShowpop(true)}}>Login</button>
    </li>
    
  </ul></nav>
  
  <div className="wrapper">
          <div className="modal" style={{ display:showpopLogin===true ? 'block' : 'none' }} >
            <div className="modal-dialog" id="center-aligned-account-modal">
              <div className="modal-content" style={{ height: "auto", width: "500px" }}>
                <div className="modal-header noBorder" style={{ height: '1px' ,padding:'20px'}}>
                  <button type="button"class="btn-close" data-bs-dismiss="modal" aria-label="Close" style={{marginLeft:"95%"}} onClick={()=>{setShowpopLogin(false);window.location.reload();}}>
                    
                    {/* <i class="fa fa-close"></i> */}

                  </button>
                </div>
               
                  <div className="modal-body" style={{ height: '400px' }}>
                   <SignUpCredentials/>
   
                  
                  </div>
                
              </div>
            </div>
          </div>
        </div >
  
  
        <div className="wrapper">
          <div className="modal" style={{ display:showpop===true ? 'block' : 'none' }}>
            <div className="modal-dialog" id="center-aligned-account-modal">
              <div className="modal-content" style={{ height: "auto", width: "500px" }}>
                <div className="modal-header noBorder" style={{ height: '1px' ,padding:'20px'}}>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"  style={{marginLeft:"95%"}}  onClick={()=>{setShowpop(false);window.location.reload();}}>
                  </button>
                </div>
               
                  <div className="modal-body" style={{ height: '400px' }}>
                 
  <Login/>
                  </div>
                
              </div>
            </div>
          </div>
        </div >
  
  
  
  
  
  
  
  
  
  
  
  
  </div> );
}
 
export default Navbar;