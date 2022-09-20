import './NavBarStyle.css';
import CartWidget from './CartWidget';



const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
            <a class="navbar-brand" href="#">BACANO WINES</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse justify-content-center bg-light" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-link" href="#">Malbec</a>
                    <a className="nav-link" href="#">Cabernet Sauvignon</a>
                    <a className="nav-link" href="#">Syrah</a>
                    <a className="nav-link" href="#">Chardonnay</a>
                    <CartWidget />
                    
                </div>
            </div>
             </div>
        </nav>
    )
}

export default Navbar
