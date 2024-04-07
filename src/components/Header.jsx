import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div>
            <h2>this  is  home page</h2>
            <nav>
                <Link to ="/">Home</Link>
                <Link to="/posts">Posts</Link>
                
                <Link to ="/about">About</Link>
                <Link to ="/contact">Contact</Link>

                {/* <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/contact">Contact</a> */}
            </nav>
        </div>
    );
};

export default Header;