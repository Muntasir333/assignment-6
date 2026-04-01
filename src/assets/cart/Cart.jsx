import React from 'react';

const Cart = ({carts, setCarts}) => {
    const handlePay = ()=>{
        setCarts([]);

    }

const handleDlt =(cart)=>{
const filter = carts.filter(c=> c.id !== cart.id)
setCarts(filter)
}
    const totalPrice = carts.reduce((sum, cart)=>sum + cart.price, 0);
    return (
        <div className='w-300 m-auto space-y-4 p-5'>
            <h2 className='text-3xl font-bold text-[#101727]'>Your Cart</h2>
            {
                carts.length === 0 ? (<p className='text-xl font-bold text-[#101727] text-center'>Cart is Empty</p>) : (<>
                 {
            carts.map(cart=> <div className='flex gap-5 items-center border p-5 rounded-3xl'>
                <div>
                 <img className='h-10 w-10 border rounded-4xl' src={cart.icon} alt="" />
                 </div>
                 <div className='flex justify-between items-center w-full'>
                   <div className='flex flex-col gap-2'> <h2 className='text-2xl font-bold text-[#101727]'>{cart.name}</h2>
                    <h2 className='text-[#627382]'>{cart.price}</h2></div>
                    <div>
                    <button onClick={()=>handleDlt(cart)} className='btn btn-error '>Remove</button>
                    </div>
                 </div>
            
            </div>)
           }<div className='flex justify-between p-5'>
            <h2 className='text-3xl font-bold text-[#101727]'>Total</h2>
            <h2 className='text-3xl font-bold text-[#101727]'>{totalPrice}$</h2>
           </div>
           <button onClick={handlePay} className='btn btn-primary w-full rounded-3xl'>Procced To CheckOut</button></>)
            }
          
        </div>
    );
};

export default Cart;