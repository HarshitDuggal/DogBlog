import { Link } from "react-router-dom";
const navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>The DogBlog</h1>
            <div className="links">
                <Link to='/'>Home</Link>
                <Link to='/create'
                // for styling in line component
                //  style={{
                //     color:'white',
                //     backgroundColor:"#f1356d",
                //     borderRadius:'8px'
                //  }}
                >New Blog</Link>
            </div>
        </nav>
     );
}
 
export default navbar;
