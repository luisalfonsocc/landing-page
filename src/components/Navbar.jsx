function Navbar(){
    return(
<nav className="navbar navbar-expand-lg bg-dark text-danger">
  <div className="container-fluid">
    <a className="navbar-brand text-danger" href="#"> <span>NASCAR 4GEEKS</span></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse d-flex justify-content-end" id="navbarNavDropdown">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="nav-link active text-danger" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-warning" href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-success" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-primary" href="#">Contact</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>


);
}
export default Navbar;