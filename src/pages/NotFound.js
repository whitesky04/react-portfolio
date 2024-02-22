import React from 'react';
// import { Link } from "react-router-dom";

const NotFound = () => {
    return(
        <div>
            <div className="notFoundWrapper">
                <h3>404 page not found</h3>
                <p>sorry, but the page you are looking for does not exist.</p>
                {/* <Link to={`/`} className="nav-link mask font-face-ps">go back</Link>   */}
            </div>
        </div>
    );
}

export default NotFound;