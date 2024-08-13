
import React from 'react'
import { FaMobileAlt } from "react-icons/fa";
function navbar() {
  return (

    <div className=' flex  px-52 w-full h-11 bg-[#E11B23] rounded '>
                <div className="Home w-28 justify-center content-center text-center border-x-[1px] border-zinc-800 bg-white  text-zinc-800 font-sans font-black leading-5 text-sm ">WOMEN</div>
                <div className="w-28 text-center justify-center content-center  border-zinc-800   text-white font-sans font-black  text-sm ">MEN</div>
                <div className="w-28  text-center justify-center content-center border-x-[1px] border-zinc-800  text-white font-sans font-black text-sm ">KIDS</div>
           
          <div className=" flex p-3 content-end justify-end w-full h-11 bg-[#E11B23]  ">
                <div className="w-28 relative text-center justify-center content-center  text-white font-sans font-black text-[12px] ">TRACK ORDER</div>
               <div className="w-28  text-center justify-center content-center  text-white font-sans font-black text-[12px] ">CONTACT US</div>
               <div className="w-28 gap-2 text-center justify-center content-center text-white font-sans font-black text-[12px] ">
                      <div className="icon w-0 h-0 "><FaMobileAlt style/></div>
                       DOWNLOAD APP</div>
            </div>    
    </div>
  )
}

export default navbar