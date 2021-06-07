const navbar = () => {
    return ( 
        <nav className="Navbar">
            <h1>The DogBlog</h1>
            <div className="links">
                <a href='/'>Home</a>
                <a href='/create'
                // for styling in line component
                //  style={{
                //     color:'white',
                //     backgroundColor:"#f1356d",
                //     borderRadius:'8px'
                //  }}
                >New Blog</a>
            </div>
        </nav>
     );
}
 
export default navbar;
