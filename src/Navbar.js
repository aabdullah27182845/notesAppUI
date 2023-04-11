import Logo from "./Logo";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <Logo />
            </div>
            <div className="links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Help</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;