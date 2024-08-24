import React from 'react'
import { TbGhost } from "react-icons/tb";
import Dropdown from './dropdown';

function Secondnavbar() {
  const  data = [
    {desc1:'CASUAL T SHIRT',
    desc2:'POLO T SHIRT',
    desc3:'SOLID T SHIRT',
    desc4:'JACKETS',
    desc5:'CO-ORDS SET',
    desc6:'OVERSIZE SHIRT',
    title:'TOPWEAR' },
    {desc1:'PANT',
      desc2:'CARGO',
      desc3:'JEANS',
      desc4:'ALL BOTTOM',
      desc5:'SHORTS',
      desc6:'PAJAMAS',
      title:'BOTTOMWEAR' },
      {desc1:'TOP 20 SHIRTS',
        desc2:'TOP 20 BOTTOM',
        desc3:'TOP 20 SNEAKERS',
        desc4:'NEW TRENDS',
        desc5:'ACCESSORIES',
        desc6:'TOP THEMES',
        title:'BESTSELLER' },
        {desc1:'CASUAL T SHIRT',
          desc2:'POLO T SHIRT',
          desc3:'SOLID T SHIRT',
          desc4:'JACKETS',
          desc5:'CO-ORDS SET',
          desc6:'OVERSIZE SHIRT',
          title:'ACCESSORIES' },
          {desc1:'SNEAKERS',
            desc2:'SNEAKERS CARE',
            title:'SNEAKERS' },
            {desc1:'CASUAL T SHIRT',
              desc2:'POLO T SHIRT',
              desc3:'SOLID T SHIRT',
              desc4:'JACKETS',
              desc5:'CO-ORDS SET',
              desc6:'OVERSIZE SHIRT',
              title:'THEMES' },
              {desc1:'CASUAL T SHIRT',
                desc2:'POLO T SHIRT',
                desc3:'SOLID T SHIRT',
                desc4:'JACKETS',
                desc5:'CO-ORDS SET',
                desc6:'OVERSIZE SHIRT',
                title:'COLLECTIONS' },
    
  ]
  return (
    <>
    <div className='flex  z-10 gap-1 px-48 w-full h-11 bg-[#FFFFFF] rounded border-y-[1px] border-zinc-800'>
    {data.map((item, index)=>(
      <Dropdown data={item} />
    ))}
          
          {/* <div  id='drop' className="w-28  justify-center content-center text-center bg-white hover:text-[#E11B23] hover:text-base text-zinc-700 font-sans font-black leading-5 text-xs ">TOPWEAR
          </div>
          <div className="w-28 justify-center content-center text-center bg-white hover:text-[#E11B23] hover:text-base text-zinc-700 font-sans font-black leading-5 text-xs ">BOTTOMWEAR</div>
          <div className="w-28 justify-center content-center text-center bg-white hover:text-[#E11B23] hover:text-base text-zinc-700 font-sans font-black leading-5 text-xs ">BESTSELLER</div>
          <div className="w-28 justify-center content-center text-center bg-white hover:text-[#E11B23] hover:text-base text-zinc-700 font-sans font-black leading-5 text-xs ">SNEAKERS</div>
          <div className="w-28 justify-center content-center text-center bg-white hover:text-[#E11B23] hover:text-base text-zinc-700 font-sans font-black leading-5 text-xs ">ACCESSORIES</div>
          <div className="w-28 justify-center content-center text-center bg-white hover:text-[#E11B23] hover:text-base text-zinc-700 font-sans font-black leading-5 text-xs ">COLLECTIONS</div>
          <div className="w-28 justify-center content-center text-center bg-white hover:text-[#E11B23] hover:text-base text-zinc-700 font-sans font-black leading-5 text-xs ">THEMES</div> */}

    </div>

  </>
  )
}

export default Secondnavbar