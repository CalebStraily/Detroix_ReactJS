import logo from '../images/logo.png';

console.log(logo);

function NavBar()
{
    return (
        <div className="company-logo">
            <div className="row">

            <div className="col-2 d-none d-sm-block"></div>

            <div className="logo-image col-12 col-xl-4 d-flex">
                <img src={logo} alt="Logo" />
            </div>

            <div className="nav-links col-12 col-xl-5 text-center">
                <button>HOME</button>
                <button>ABOUT</button>
                <button>SERVICES</button>
                <button>FAQS</button>
                <button>CONTACTS</button>
            </div>

            <div className="col-1 d-none d-sm-block"></div>

            </div>
        </div>
    )
}

export default NavBar;