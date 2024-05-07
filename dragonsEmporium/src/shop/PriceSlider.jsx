import React, { useState, useEffect } from 'react';

const PriceRangeSlider = () => {
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(1000);
    const [current, setCurrent] = useState(500);

    useEffect(() => {
        // Ensure current is within the new min and max
        if (current < min) setCurrent(min);
        if (current > max) setCurrent(max);
    }, [min, max]);

    const handleCurrentChange = (e) => {
        const value = Number(e.target.value);
        setCurrent(value);
    };

    const handleMinChange = (e) => {
        const value = Number(e.target.value);
        if (value < max) setMin(value);
        if (current < value) setCurrent(value);
    };

    const handleMaxChange = (e) => {
        const value = Number(e.target.value);
        if (value > min) setMax(value);
        if (current > value) setCurrent(value);
    };

    return (
        <div>
            <div className="flex justify-between mb-4">

                <label>
                    Min:

                </label>
                <label>
                    Max:

                </label>
            </div>
            <div className="flex space-x-2">
                <input type="number" placeholder="Min" value={min} onChange={handleMinChange} className="w-1/2 p-1 rounded bg-gray-700" />
                <input type="number" placeholder="Max" value={max} onChange={handleMaxChange} className="w-1/2 p-1 rounded bg-gray-700" />
            </div>

            <input
                type="range"
                min={min}
                max={max}
                value={current}
                onChange={handleCurrentChange}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
            />
            <div className="text-center mt-4">
                Current Selected Amount: {current}
            </div>
        </div>
    );
};

export default PriceRangeSlider;
