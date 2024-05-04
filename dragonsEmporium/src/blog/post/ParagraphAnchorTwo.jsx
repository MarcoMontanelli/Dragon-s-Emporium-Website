import React from 'react';

const ParagraphAnchorTwo = ({ contentB, anchor, anchorText, contentA }) => {
  return (
    <>
      <p>
        {contentB} <a href={anchor}>{anchorText}</a> {contentA}
      </p>
    </>
  );
};

export default ParagraphAnchorTwo;