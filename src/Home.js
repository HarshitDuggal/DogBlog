import {useState} from 'react';
const Home = () => {
// When we want a reactive value we use usestate hook 
    const [name, setname] = useState('mario');
    const [age, setage] = useState(25);

    const handleclick= () => {
        setname('luigi')
        setage('30')
    }
    // For using element in button we have to put in anonymus function or else it will not work 
    // const handleclickagain= (Name , e) => {
    //     console.log('Hello ' + Name + e.target)
    // }
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old </p>
            <button onClick={handleclick} >Click ME to know my friend's age</button>
            {/* <button onClick={(e)=> handleclickagain('mario' , e)}>Click Me Again</button> */}
        </div>
     );
}
 
export default Home;

