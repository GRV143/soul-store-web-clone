import { data } from 'autoprefixer'
import React from 'react'
import { useRef } from 'react'
import { IoIosArrowDown } from "react-icons/io";


function Dropdown({data}) {
  const user = useRef(null)


    

  function create (){
    user.current.className = 'none w-28 '
  }

  function createon (){
    user.current.className = 'hidden'
  }
  
 return (
  <>
  <div onMouseEnter={create} onMouseLeave={createon} className='dropdownbutton z-10' >
    <div className = 'w-28 h-10 items-center flex justify-center content-center text-center  bg-white hover:text-[#E11B23] hover:border-b-[3px] hover:border-b-red-500 text-zinc-600 font-sans font-bold leading-tighter text-xs'>
    {data.title} <IoIosArrowDown />
    </div>
    
        <div ref={user} id='dropdownlist' className='w-28 hidden '>
    
             <div className='w-28  p-1 flex justify-center content-center text-center  bg-white hover:text-[#E11B23]  text-zinc-600 font-sans font-bold leading-5 text-nowrap text-[11px]'>{data.desc1}
              </div>
              <div className='w-28 p-1 flex justify-center content-center text-center bg-white hover:text-[#E11B23]  text-zinc-600 font-sans font-bold leading-5 text-[11px] text-nowrap '> {data.desc2}
               </div>
               <div className='w-28 p-1 flex justify-center content-center text-center bg-white hover:text-[#E11B23]  text-zinc-600 font-sans font-bold leading-5 text-[11px] text-nowrap '> {data.desc3}
               </div>
               <div className='w-28 p-1 flex justify-center content-center text-center bg-white hover:text-[#E11B23]  text-zinc-600 font-sans font-bold leading-5 text-[11px] text-nowrap '> {data.desc4}
               </div> 
               <div className='w-28 p-1 flex justify-center content-center text-center bg-white hover:text-[#E11B23]  text-zinc-600 font-sans font-bold leading-5 text-[11px] text-nowrap '> {data.desc5}
               </div>
               <div className='w-28 p-1  flex justify-center content-center text-center bg-white hover:text-[#E11B23]  text-zinc-600 font-sans font-bold leading-5 text-[11px] text-nowrap '> {data.desc6}
               </div>


        </div>
    </div>
  </>
  )
}

export default Dropdown
