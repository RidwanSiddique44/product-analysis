import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div>
            <div className="blog-container p-5 m-5 shadow-lg">
                <h2 className="fw-bolder">What is Context API?</h2>
                <p>The Context API is a component structure provided by the React framework, which enables us to share specific forms of data across all levels of the application. Its aimed at solving the problem of prop drilling.So we can say that Context API is a React structure that enables you to exchange unique details and assists in solving prop-drilling from all levels of your application.</p>
            </div>
            <div className="blog-container p-5 m-5 shadow-lg">
                <h2 className="fw-bolder">What are semantic tags?</h2>
                <p>Semantic tags or semantic markup is HTML that introduces meaning to the web page rather than just presentation. For example, a "p" tag indicates that the enclosed text is a paragraph. This is both semantic and presentational because people know what paragraphs are, and browsers know how to display them.
                    Examples of semantic tags: form, table, and article</p>
            </div>
            <div className="blog-container p-5 m-5 shadow-lg">
                <h2 className="fw-bolder">What are the difference between block inline and inline-block?
                </h2>
                <p className='text-start'><span className="fw-bolder">Inline:</span>This one displays the element inline or on the same line. In other words, inline elements do not start on a new line and only takes up as much width as its content. So, if you try to set any width and height, it will have no effects.</p>
                <p className='text-start'><span className="fw-bolder">Inline-block:</span>inline-block. Its essentially the same thing as inline, except that you can set height and width values.</p>
                <p className='text-start'><span className="fw-bolder">Block:</span>block starts on a new line and takes up the full width available. So that means block elements will occupy the entire width of its parent element.</p>
            </div>
        </div>
    );
};

export default Blog;