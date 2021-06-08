import {useEffect, useState} from 'react';
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
    // const [name, setname] = useState('mario');
    const handledelete = (id) => {
        const newblogs = blogs.filter(blog => blog.id !== id);
        setblogs(newblogs);
    }
    // it is run every time the page render depending upon its dependencies which is in the array box if no dependacie then it will log every time when the page renders.
    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(name);   
    // }, [name]);
    return ( 
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {/* <p>{name} is {age} years old </p>
            <button onClick={handleclick} >Click ME to know my friend's age</button>
            <button onClick={(e)=> handleclickagain('mario' , e)}>Click Me Again</button> */}
            {/* Outputting list of items by using a template and not hard coding every thing */}
            <BlogList blogs={blogs} title='All Blogs!' handledelete={handledelete} />
            {/* <button onClick={() => setname('luigi')}>Namechange</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;

