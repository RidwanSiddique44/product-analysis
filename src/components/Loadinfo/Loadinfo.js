import React from 'react';

const Loadinfo = (props) => {
    const { name } = props.review;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default Loadinfo;