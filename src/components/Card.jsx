import React from 'react'

const Card = () => {
  return (
    <div>
      <div className="w-[270px] h-[320px] relative rounded overflow-hidden shadow-lg group cursor-pointer m-2">
        {/* Image */}
        <img
          className="w-full h-full object-cover"
          src="https://th.bing.com/th/id/OIP.0tdhAzLwC9_IHa5pElqCJQHaHa?w=179&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7"
          alt="Professor"
        />
        
        {/* Background Overlay using rgba() */}
        <div className="absolute inset-0 bg-[rgba(0,0,0,0.1)] group-hover:bg-[rgba(0,0,0,0.6)] transition duration-300 z-10"></div>
        
        {/* Name - always visible */}
        <div className="absolute bottom-4 left-4 z-20 text-white text-xl font-bold">
          Prof. John Doe
        </div>
        
        {/* Description - hidden by default, slides up on hover */}
        <div className="absolute bottom-[-100%] group-hover:bottom-16 left-0 w-full px-6 transition-all duration-500 z-20">
          <p className="text-white text-sm">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla!
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card