import React, { useRef } from 'react';


const ParagraphAnchor = ({content, anchor, anchorText }) => {
    
    return (
        <>
            <p>{content}</p><a href={anchor}>{anchorText}</a>
        </>
    );
};

export default ParagraphAnchor;
