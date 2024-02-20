import React from 'react';
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
    const navigate = useNavigate();
    return(
        <div>
            <div className="notFoundWrapper">
                <h3>404 page not found</h3>
                <p>sorry, but the page you are looking for does not exist.</p>
                <button className="button back-button" onClick={() => navigate.goBack()}>Back</button>
            </div>
        </div>
    );
}

export default NotFoundPage;