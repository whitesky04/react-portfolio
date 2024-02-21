import React from 'react';
import Header from '../Header/Header.js';

const Blog = () => {
    return(
        <div>
            <Header />
            <div className="BlogWrapper">
                <h3>Blog title</h3>
                <p>this will replace blog text.</p>
            </div>
        </div>
    );
}

export default Blog;