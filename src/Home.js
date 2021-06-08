import {useState} from 'react';
import BlogList from './BlogList';
const Home = () => {
// When we want a reactive value we use usestate hook 
    // const [name, setname] = useState('mario');
    // const [age, setage] = useState(25);

    // const handleclick= () => {
    //     setname('luigi')
    //     setage('30')
    // }
    // For using element in button we have to put in anonymus function or else it will not work 
    // const handleclickagain= (Name , e) => {
    //     console.log('Hello ' + Name + e.target)
    // }

// This comment is seperation use state hook from outputting diff list items technique

    

    const [blogs, setblogs] = useState([
        { title:'My Website',body: 'loreum ipsium ..', author:'mario', id:1 },
        {title:'Mine Media',body: 'loreum ipsium ..', author:'harshit', id:2 },
        {title:'Mine Dt',body: 'loreum ipsium ..', author:'mario', id:3 }
    ]);
    const handledelete = (id) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setblogs(newblogs);
    }
    return ( 
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {/* <p>{name} is {age} years old </p>
            <button onClick={handleclick} >Click ME to know my friend's age</button>
            <button onClick={(e)=> handleclickagain('mario' , e)}>Click Me Again</button> */}
            {/* Outputting list of items by using a template and not hard coding every thing */}
            <BlogList blogs={blogs} title='All Blogs!' handledelete={handledelete} />
            
        </div>
     );
}
 
export default Home;

