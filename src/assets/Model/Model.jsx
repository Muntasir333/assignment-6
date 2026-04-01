import React, { use } from 'react';

import New from '../../under/New';

const Model = ({dataPromise, carts, setCarts}) => {
    const mode = use(dataPromise)
    console.log(mode)

   
    return (

        
        <div className='lg:w-300 m-auto'>


            <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                {
                    mode.map(mod=> <New mod={mod} carts={carts} setCarts={setCarts}></New>
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