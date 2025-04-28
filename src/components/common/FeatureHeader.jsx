import React from 'react';

const FeatureHeader = ({ title, description }) => {
    return (
        <div className='mb-7'>
            <h2 className='font-bold text-2xl text-gray-900'>{title}</h2>
            <p className='text-gray-700'>{description}</p>
        </div>
    );
};

export default FeatureHeader;