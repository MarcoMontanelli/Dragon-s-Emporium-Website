import React from 'react';

const ResponsiveTable = ({ data }) => {
    if (!data || !data.length) return <p>No data available.</p>;

    const headers = Object.keys(data[0]); // Assumes all objects have the same keys
    const columnWidth = 100 / headers.length; // Calculate column width as a percentage

    return (
        <div className="overflow-x-auto shadow-lg rounded-lg">
            <table className="w-full bg-gray-900 text-white">
                <thead className="text-xs font-bold text-gray-400 uppercase bg-slate-900 rounded-lg">
                    <tr>
                        {headers.map(header => (
                            <th key={header} className="px-6 py-3" style={{ width: `${columnWidth}%` }}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index} className="border-b border-gray-700 hover:bg-gray-700 bg-gray-950 rounded-lg">
                            {headers.map(header => (
                                <td key={`${header}-${index}`} className="px-6 py-4 text-left" style={{ width: `${columnWidth}%` }}>
                                    {item[header]}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ResponsiveTable;
