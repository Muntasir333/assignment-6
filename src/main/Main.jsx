import React from 'react';

const Main = () => {
    return (
        <div>
            <div className='text-center'>
                <h1 className='text-3xl lg:text-5xl font-bold text-[#101727]'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed<br></br>to boost your productivity and creativity.</p>
            </div>
            <div>
                {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center">
  <input type="radio" name="my_tabs_1" className="tab bg-violet-800 text-white" aria-label="Products" defaultChecked />
  <input type="radio" name="my_tabs_1" className="tab" aria-label="Cart(0)" />
</div>
            </div>
        </div>
    );
};

export default Main;