import React from 'react'

import amandaSrc from 'assets/amanda_hunter.jpg'

export default function Testamonial() {
  return (
    <div className="my-16 -mx-0 py-8 px-10 bg-white shadow-lg rounded-3xl flex items-center">
      <div className="flex-1 text-md">
        “Mark really captured the vision for our organization. He is a great
        communicator, and made the whole process very easy. I have nothing but
        good things to say!”
      </div>
      <div className="flex items-center">
        <img
          src={amandaSrc}
          alt="Amanda"
          className="rounded-full h-24 w-24 ml-6 mr-4"
        />
        <div className="">
          Amanda
          <div className="text-sm italic whitespace-nowrap">LEAP Charities</div>
        </div>
      </div>
    </div>
  )
}
