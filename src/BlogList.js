const BlogList = ({blogs,title,handledelete}) => {
    // const blogs= props.blogs;
    // const title= props.title;
    return ( 
        <div className='Blog-List'>
            <h2>{ title }</h2>
            {blogs.map((blog) => (
            <div className='Blog-Preview' key={blog.id}>
                <h2>{blog.title}</h2>
                <p>Written by {blog.author}</p>
                <button onClick={()=>handledelete(blog.id)}>Delete this blog</button>
            </div>
            ))}
        </div>    
     );
}
 
export default BlogList;