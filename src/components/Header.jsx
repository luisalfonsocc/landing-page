function Header() {
    return (

        <div className="card" style={{"background-image":"url(https://www.daytonainternationalspeedway.com/wp-content/uploads/sites/1003/2023/03/05/DAYTONA5001400X500_2023.jpg)"}}>
            <div className="card-body  " >
                <div className="card-title d-flex justify-content-start text-warning" style={{"font-size" :"7rem", "font-family":"Bebas neue"}} > NASCAR LIFE</div> 
                <p className="card-text d-flex justify-content-start text-info" style={{"font-size" :"4rem", "font-family":"Bebas neue"}} > The website for the nascar fan</p>
                <a href="#" className="btn btn-primary  float-start">Go! Go! Go!</a>
            </div>
        </div>


    );
}

export default Header;

