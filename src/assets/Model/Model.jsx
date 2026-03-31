import React, { use } from 'react';

import New from '../../under/New';

const Model = ({dataPromise}) => {
    const mode = use(dataPromise)
    console.log(mode)

   
    return (

        
        <div className='lg:w-300 m-auto'>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-5xl font-bold text-[#101727]'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
            </div>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    mode.map(mod=> <New mod={mod}></New>
                )}
            </div>
            
        </div>
    );
};

export default Model;

// Name
// Description
// Price
// Period
// TagType
// Features
// Icon
// Buy Now button