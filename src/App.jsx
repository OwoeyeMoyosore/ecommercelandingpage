// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

import Nav from "./sections/Nav";
import Hero from "./sections/Hero";
import PopularProducts from "./sections/PopularProducts";
import SuperQuality from "./sections/SuperQuality";
import Services from "./sections/Services";
import SpecialOffers from "./sections/SpecialOffers";
import CustomerReviews from "./sections/CustomerReviews";
import Subscribe from "./sections/Subscribe";
import Footer from "./sections/Footer"

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App

const App =() =>{
  return(
<main className="relative">
    <Nav />
  <section className="xl:padding-l padding-b w-full">
    <Hero/>
  </section>
  <section className="padding">
      <PopularProducts />
  </section>
  <section className="padding">
      <SuperQuality/>
  </section>
  <section className="padding-x py-10">
      <Services />
  </section>
  <section className="padding">
      <SpecialOffers/>
  </section>
  <section className="padding bg-pale-blue">
      <CustomerReviews />
  </section>
  <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe />
  </section>
  <section className="bg-black padding-x padding-t pb-8">
      <Footer/>
  </section>

</main>
  )
}
export default App;