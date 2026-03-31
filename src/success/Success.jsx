import React from 'react';


const Success = () => {
    return (
        <div className='bg-violet-800 grid grid-cols-1 lg:grid-cols-3 items-center p-20 text-center gap-6 mb-28'>
            <div>
                <h2 className='text-6xl font-bold text-white'>50K+</h2>
                <p className='text-xl text-white'>Active Users</p>
            </div>
            <div>
                <h2 className='text-6xl font-bold text-white'>200K+</h2>
                <p className='text-xl text-white'>Premium Tools</p>
            </div>
            <div>
                <h2 className='text-6xl font-bold text-white'>4.9</h2>
                <p className='text-xl text-white'>Rating</p>
            </div>
           
        </div>
    );
};

export default Success;