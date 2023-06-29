const Navbar1 = () => {
    return ( <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Ecommerce</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
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
    </div>
  </div>
</nav>
    </div> );
}
 
export default Navbar1;