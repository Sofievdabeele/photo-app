import './Navigation.css';

const Navigation = () => {

    return (

      <header>
        <div className="toggle-container">
            <div className="toggle"></div>
        </div>
        <nav className="navbar">

            <ul className="nav-menu">
                <li className="nav-item"><a className="nav-link" href="/">Home</a></li>
                <li className="nav-item"><a className="nav-link" href="/loginPage">Login</a></li>
                <li className="nav-item"><a className="nav-link" href="/loginPage">Photos</a></li>
                <li className="nav-item"><a className="nav-link" href="/">Logout</a>
                </li>
            </ul>

            <div className="hamburger">
                <span className="bar"></span>
                <span className="bar"></span>
                <span className="bar"></span>
            </div>
        </nav>
        </header>
         
    )
}
export default Navigation;


