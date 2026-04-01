
import './App.css'
import Hero from './assets/Hero/Hero'
import Model from './assets/Model/Model'
import Navbar from './Navbar/Navbar'
import Success from './success/Success'
import Cart from './assets/cart/Cart'
import { useState } from 'react'
import Main from './main/Main'
import Started from './assets/Started/Started'
import Offer from './assets/offer/Offer'
import Footer from './footer/Footer'

const getData = async ()=>{
  const res = await fetch("/data.json")
  return res.json()
}

const dataPromise = getData();

function App() {
  const [active, setActive] = useState('model')
  const [carts, setCarts] = useState([]);
  console.log(carts)


  return (
    <>
  <Navbar Carts={carts}></Navbar>
  <Hero></Hero>
  <Success></Success>
  <Main></Main>
  {/* name of each tab group should be unique */}
<div className="tabs tabs-box justify-center bg-transparent mb-3">
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label="Products" defaultChecked onClick={()=>setActive("model")}/>
  <input type="radio" name="my_tabs_1" className="tab rounded-full w-40" aria-label={`Cart(${carts.length})`} onClick={()=>setActive("cart")} />
</div>
  {active ==="model" ? <Model carts={carts} setCarts={setCarts} dataPromise={dataPromise}></Model> : null}
  {active ==="cart" ?   <Cart carts={carts} setCarts={setCarts}></Cart> : null}

  <Started></Started>
  <Offer></Offer>
  <Footer></Footer>

    </>
  )
}

export default App
