// import {useEffect, useState} from 'react';
import BlogList from './BlogList';
import useFetch from './useFetch';
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

    

    
    // const [name, setname] = useState('mario');
    // it is run every time the page render depending upon its dependencies which is in the array box if no dependacie then it will log every time when the page renders.
    // useEffect(() => {
    //     console.log('use effect ran');
    //     console.log(name);   
    // }, [name]);
    
    const { Data : blogs , isPending , error} = useFetch('http://localhost:8000/blogs');

    return ( 
        <div className="home">
            {/* <h2>Homepage</h2> */}
            {/* <p>{name} is {age} years old </p>
            <button onClick={handleclick} >Click ME to know my friend's age</button>
            <button onClick={(e)=> handleclickagain('mario' , e)}>Click Me Again</button> */}
            {/* Outputting list of items by using a template and not hard coding every thing */}
            {error && <div>{error}</div>}
            {isPending && <div>Loading ....</div>}
            {blogs && <BlogList blogs={blogs} title='All Blogs!' />}
            {/* <button onClick={() => setname('luigi')}>Namechange</button>
            <p>{name}</p> */}
        </div>
     );
}
 
export default Home;

