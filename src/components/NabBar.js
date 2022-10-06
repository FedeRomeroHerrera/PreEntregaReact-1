import './NavBarStyle.css';
import { Link } from 'react-router-dom';


const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><Link to={"/"}>BACANO WINES</Link></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                <div className="collapse navbar-collapse justify-content-center bg-light" id="navbarNavAltMarkup">
                    <div className="navbar-nav">                    
                        <a className="nav-link"><Link to={"/malbec"}>MALBEC</Link></a>
                        <a className="nav-link"><Link to={"/cabernet"}>CABERNET SAUVIGNON</Link></a>
                        <a className="nav-link"><Link to={"/syrah"}>SYRAH</Link></a>
                        <a className="nav-link"><Link to={"/chardonnay"}>CHARDONNAY</Link></a>                 
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
