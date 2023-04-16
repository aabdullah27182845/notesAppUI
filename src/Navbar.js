import Logo from "./Logo";

const Navbar = () => {
    return ( 
        <nav className="navbar">
            <div className="logo">
                <a href="/"><Logo /></a>
            </div>
            <div className="links">
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">Login</a></li>
                    <li><a href="/">Help</a></li>
                    <li><a href="/notes">Create</a></li>
                </ul>
            </div>
        </nav>
     );
}
 
export default Navbar;