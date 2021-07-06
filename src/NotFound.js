import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className='Notfound'>
            <h2>Sorry</h2>
            <p>The Page Cannot Be Found ...</p>
            <Link to='/'>Back to homepage</Link>
        </div>
    );
}

export default NotFound;
