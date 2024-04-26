;
import '../../css/codeArea.css'; // Make sure this import points to the correct file path
import React, { useCallback, useState, useRef } from 'react';
const highlightPythonSyntax = (code) => {
    // Define regex patterns for Python syntax with capturing groups
    const patterns = [
      { regex: /(\bdef\b)\s+(\w+)/g, type: 'function' },
      { regex: /(\bclass\b)\s+(\w+)/g, type: 'class' },
      { regex: /\b(import|from|return|if|else|elif|while|for|with|as|try|except|raise|in|is|and|or|not)\b/g, type: 'keyword' },
      { regex: /(\".*?\"|\'.*?\')/g, type: 'string' },
      { regex: /(#.*?$)/gm, type: 'comment' },
      { regex: /(\b[A-Za-z_][A-Za-z0-9_]*\b)(?=\s*=\s*)/g, type: 'variable' },
    ];

    // Split the code into parts and apply regex patterns
    let parts = [code];
    patterns.forEach(pattern => {
      let newParts = [];
      parts.forEach(part => {
        if (typeof part === 'string') {
          newParts.push(...part.split(pattern.regex).map((splitPart, index) => {
            // Apply the pattern to every other element (the matched parts)
            return index % 2 === 1 ? (<span className={`text-${pattern.type}`}>{splitPart}</span>) : splitPart;
          }));
        } else {
          // Already a JSX element, just keep it
          newParts.push(part);
        }
      });
      parts = newParts;
    });

    // Return array of JSX elements
    return parts.flat();
};

const CodeArea = ({ header, code }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const buttonContainerRef = useRef(null); // Reference to the container of the copy button

    const copyToClipboard = useCallback(() => {
        navigator.clipboard.writeText(code)
          .then(() => {
            setShowTooltip(true);
            setTimeout(() => setShowTooltip(false), 2000); // Hide tooltip after 2 seconds
          })
          .catch(() => {
            setShowModal(true); // Show modal on error
          });
    }, [code]);

    const openOnGithub = useCallback(() => {
        // Replace with the actual URL to the code on GitHub
        const githubUrl = 'https://github.com/your-repo/your-file';
        window.open(githubUrl, '_blank');
    }, []);

    return (
        <>
            
            <div className="flex items-center justify-between px-2 py-2  bg-gray-900 rounded-t-lg shadow-xl shadow-purple-700/50 ">
                <div className="flex space-x-1">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="text-xs text-gray-400">{header}</span>
                <div ref={buttonContainerRef}  className="flex items-center space-x-2">
                    <button onClick={openOnGithub} className="p-1 hover:bg-purple-900">
                        <svg className="w-4 h-4 fill-current text-gray-400 " viewBox="0 0 496 512">
                        <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"></path>
                        </svg>
                    </button>
                    <button onClick={copyToClipboard} className="p-1 hover:bg-purple-900 relative">
                        <svg className="w-4 h-4 fill-current text-gray-400 " viewBox="0 0 448 512">
                        <path d="M208 0H332.1c12.7 0 24.9 5.1 33.9 14.1l67.9 67.9c9 9 14.1 21.2 14.1 33.9V336c0 26.5-21.5 48-48 48H208c-26.5 0-48-21.5-48-48V48c0-26.5 21.5-48 48-48zM48 128h80v64H64V448H256V416h64v48c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V176c0-26.5 21.5-48 48-48z"></path>
                        </svg>
                    </button>
                    {showTooltip && (
                        <div className="absolute left-0 -bottom-12 z-10 ml-2 p-2 text-xs text-white bg-gray-800 rounded">
                            Code copied!
                        </div>
                    )}
                </div>
            </div>
            <div className="pre-container">
                <pre className="code-area text-xs text-gray-300 font-mono bg-black rounded-b-lg shadow-xl shadow-purple-700/50 overflow-x-auto">
                    {highlightPythonSyntax(code)}
                </pre>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
                    <div className="bg-gray-900 p-5 rounded-lg">
                        <h2 className="text-lg text-white">Error</h2>
                        <p className="text-gray-300">Failed to copy to clipboard.</p>
                        <button onClick={() => setShowModal(false)} className="mt-4 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default CodeArea;


