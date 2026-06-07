// import { useState } from 'react'
import picture from '../assets/a.jpg'

function Exersice() {

    function handlerOffers() {

      alert("50% Off")

    }

  return (
    
    <div onMouseEnter={ handlerOffers }
    className='flex flex-col items-center justify-center gap-2 bg-sky-900 rounded-4xl p-4 pb-4 ml-4 mr-4'>

      <img 
      className='w-full rounded-4xl' src={picture} alt="pic"/>
      <h2 
      className='text-2xl text-gray-200'>Hp laptops I7</h2>
      <p
      className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur eos, aliquam optio ullam odit enim officia facilis consequuntur, corporis molestias sapiente. Necessitatibus debitis dolorem voluptatibus, reprehenderit numquam culpa delectus saepe?</p>
      <button 
      className='bg-sky-300 rounded-2xl pt-2 pb-2 pr-4 pl-4 cursor-pointer transition-all
      hover:bg-sky-400
      '>Add To Card</button>

    </div>
    

  );



}

export default Exersice;