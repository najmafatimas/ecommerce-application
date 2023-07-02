import { useEffect, useState } from "react";
const Navbar1 = () => {
  
 let [showProf,setShowProf]=useState({});
 useEffect(()=>{
  setShowProf(JSON.parse(localStorage.getItem('userDetails')));
},[])
const [isEditMode, setIsEditMode] = useState(false);

console.log(showProf.userName)
  // const [text, setText] = useState(showProf);
  const toggleEditMode = () => {
    setIsEditMode(true)
  };
  const [inputs, setInputs] = useState(showProf);


  const handleInputChange = (event) => {
    
    // setText(event.target.value);
    const { name, value } = event.target;
    setInputs((prevInputs) => ({
      ...prevInputs,
      [name]: value,
    }));
  }
    
  
    return ( <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ecommerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse justify-content-end " id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/hello">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
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
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title">User Account</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
      {/* {isEditMode ? (
        <input type="text" value={text.userName} onChange={handleTextChange} />
      ) : (
        <p>{text}</p>
      )} */}
      {isEditMode ? (
        <div>
          {Object.entries(inputs).map(([key, value]) => (
            <input
              key={key}
              type="text"
              name={key}
              value={value}
              onChange={handleInputChange}
            />
          ))}
        </div>
      ) : (
        <div>
          {Object.entries(inputs).map(([key, value]) => (
            <p key={key}>
              {key}: {value}
            </p>
          ))}
        </div>
      )}
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary" onClick={toggleEditMode}>Save changes</button>
      </div>
    </div>
  </div>
</div>
    </div> );
}
 
export default Navbar1;