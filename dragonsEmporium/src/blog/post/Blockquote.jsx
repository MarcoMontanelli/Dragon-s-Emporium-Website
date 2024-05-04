import React from 'react';

const Blockquote = ({ quoteItem }) => {
    return (
        <blockquote>
            <p>{quoteItem}</p>
        </blockquote>
    );
};

export default Blockquote;