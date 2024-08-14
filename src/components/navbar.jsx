import React from 'react'
function navbar() {
  return (

    <div className=' flex  px-52 w-full h-11 bg-[#E11B23] rounded '>
                <div className="w-28 hover:bg-white hover:text-zinc-800 justify-center content-center text-center border-x-[1px] border-zinc-800 text-white font-sans font-black leading-5 text-sm ">WOMEN</div>
                <div className="w-28 hover:bg-white hover:text-zinc-800 text-center justify-center content-center  border-zinc-800   text-white font-sans font-black  text-sm ">MEN</div>
                <div className="w-28 hover:bg-white hover:text-zinc-800  text-center justify-center content-center border-x-[1px] border-zinc-800  text-white font-sans font-black text-sm ">KIDS</div>
           <div className=" flex  content-end justify-end w-full h-11 bg-[#E11B23]  ">
                <div className="w-28 border-x-[1px] border-zinc-800 hover:bg-white hover:text-zinc-800 text-center justify-center content-center  text-white font-sans font-black text-[12px] ">TRACK ORDER</div>
               <div className="w-28  hover:bg-white hover:text-zinc-800 text-center justify-center content-center  text-white font-sans font-black text-[12px] ">CONTACT US</div>
               <div className="w-28 border-x-[1px] border-zinc-800 hover:bg-white hover:text-zinc-800 text-center justify-center content-center text-white font-sans font-black text-[12px] ">
                DOWNLOAD APP
                     </div>
                </div>  
      </div>
  )
}

export default navbar