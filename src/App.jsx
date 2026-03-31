
import './App.css'
import Hero from './assets/Hero/Hero'
import Model from './assets/Model/Model'
import Navbar from './Navbar/Navbar'
import Success from './success/Success'
import Cart from './assets/cart/Cart'
import { useState } from 'react'

const getData = async ()=>{
  const res = await fetch("/data.json")
  return res.json()
}

const dataPromise = getData();

function App() {
  const [active, setActive] = useState('model')


  return (
    <>
  <Navbar></Navbar>
  <Hero></Hero>
  <Success></Success>
  {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" defaultChecked onClick={()=>setActive("model")}/>
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Cart(0)" onClick={()=>setActive("cart")} />
</div>
  {active ==="model" ? <Model dataPromise={dataPromise}></Model> : null}
  {active ==="cart" ?   <Cart></Cart> : null}

    </>
  )
}

export default App
