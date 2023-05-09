import React from 'react';

const Loading = () => {
    return (
        <div className='flex h-screen justify-center items-center'>
            <progress className="progress flex justify-center items-center w-56"></progress>
        </div>
    );
};

export default Loading;