import {useState} from 'react'
import {useEffect} from 'react'
import SignUpCredentials from './SignUpCredentials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Login from './Login';
const Navbar = () => {
    const [showpop, setShowpop]=useState(false);
    const [showpopLogin,setShowpopLogin]=useState(false);
    return ( <div>
        <nav class="navbar">
        <a class="navbar-brand" href="#"><img src="e1logo.png" width="100px" height="100px"></img></a>
            <ul class="nav justify-content-end">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" href="#" onClick={()=>{setShowpop(true)}}>Sign Up</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#" onClick={()=>{setShowpopLogin(true)}}>Login</a>
    </li>
    
  </ul></nav>
  
  <div className="wrapper">
          <div className="modal" style={{ display:showpop===true ? 'block' : 'none' }}>
            <div className="modal-dialog" id="center-aligned-account-modal">
              <div className="modal-content" style={{ height: "auto", width: "500px" }}>
                <div className="modal-header noBorder" style={{ height: '1px' ,padding:'20px'}}>9
                  <button type="button" className="close btn btn-primary" data-dismiss="modal" id="close_id" onClick={()=>{setShowpop(false);} } style={{marginLeft:"95%"}}>
                    
                    <i class="fa fa-close"></i>

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
          <div className="modal" style={{ display:showpopLogin===true ? 'block' : 'none' }}>
            <div className="modal-dialog" id="center-aligned-account-modal">
              <div className="modal-content" style={{ height: "auto", width: "500px" }}>
                <div className="modal-header noBorder" style={{ height: '1px' ,padding:'20px'}}>
                  <button type="button" className="close btn btn-primary" data-dismiss="modal" id="close_id" onClick={()=>{setShowpopLogin(false)} } style={{marginLeft:"95%"}}>
                    
                    <i class="fa fa-close"></i>

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