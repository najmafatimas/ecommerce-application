import {useState} from 'react'
import {useEffect} from 'react'
import SignUpCredentials from './SignUpCredentials';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
const Navbar = () => {
    const [showpop, setShowpop]=useState(false);
 
    return ( <div>
        <nav class="navbar">
        <a class="navbar-brand" href="#"><img src="e1logo.png" width="100px" height="100px"></img></a>
            <ul class="nav justify-content-end">
    <li class="nav-item">
      <a class="nav-link" aria-current="page" onClick={()=>{setShowpop(true)}}>Sign Up</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Login</a>
    </li>
    
  </ul></nav>
  
  <div className="wrapper">
          <div className="modal" style={{ display:showpop===true ? 'block' : 'none' }}>
            <div className="modal-dialog" id="center-aligned-account-modal">
              <div className="modal-content" style={{ height: "auto", width: "750px" }}>
                <div className="modal-header noBorder" style={{ height: '1px' ,padding:'20px'}}>
                  <button type="button" className="close btn btn-primary" data-dismiss="modal" id="close_id" onClick={()=>{setShowpop(false)} } style={{marginLeft:"95%"}}>
                    {/* <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24">
                      <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
                      <path d="M0 0h24v24H0z" fill="none" />
                    </svg> */}
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
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  </div> );
}
 
export default Navbar;