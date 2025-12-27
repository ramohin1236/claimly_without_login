import React from 'react'
import { ListIcon } from '../icons-svg/customIcons'
import Image from 'next/image'
import logofirst from '../../../public/image 21 (1).png'
import logosecond from '../../../public/image 21 (2).png'
import logothird from '../../../public/image 21 (3).png'
import logofourth from '../../../public/image 21 (4).png'
import logofifth from '../../../public/image 21 (5).png'
import logosixth from '../../../public/image 21 (6).png'

const LogoSection = () => {
  return (
   <div className='pt-10 md:pt-28'>
      <div className='flex flex-col p-6 lg:p-16 bg-linear-to-br from-[#DBEAFE] to-[#F9FAFB] rounded-[40px] outline-[1px] outline-[#0000001A] xl:flex-row justify-between items-center  gap-10'>
        {/* left section */}
        <div className='flex flex-1 flex-col gap-4 md:gap-2.5'>
            <div>
                 <h2 className='text-2xl lg:text-[40px] leading-[120%] font-semibold'>Everyday Australians are Using <span className='text-brand'> Claimly</span>  with insurers like</h2>
            </div>
            <div className='flex flex-col gap-4'>
                <p className='default-list-text'>Claimly can be used with all Australian general insurers.</p>
                <p className='default-list-text'>Your report may include:</p>
            </div>
            <div>
                
                <ul className="mt-2.5 space-y-2.5">
                  {[
                    "Damage to your vehicle",
                    "Key considerations under the Insurance Contracts Act 1984 (Cth)",
                    "Insurer obligations under the General Insurance Code of Practice (GICOP)",
                    "Complaint obligations under ASIC Regulatory Guide 271 (RG 271)",
                    "An example complaint letter",
                  ].map((item, index) => (
                    <li key={index} className="flex items-start gap-2.5">
                      <ListIcon className="list-icon shrink-0 mt-0.5" />
                      <span className="default-list-text">{item}</span>
                    </li>
                  ))}
                  </ul>

                   
                
            </div>
        </div>
        {/* right section */}
          <div className=' flex-1 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 gap-5 justify-center items-center'>
              <div className='py-2 px-6 lg:px-14 lg:py-6 bg-white border border-[#2563EB] rounded-lg flex items-center justify-center'>
                  <Image 
                  src={logofirst}
                  height={100}
                  width={100}
                  alt='AAMI'
                  className='object-cover'
                
                  />
              </div>
              <div className='py-2 px-6 lg:px-14 lg:py-6 bg-white border border-[#2563EB] rounded-lg flex items-center justify-center '>
                  <Image 
                  src={logosecond}
                  height={100}
                  width={100}
                  alt='AAMI'
                   className='object-cover'
                  />
              </div>
              <div className='py-2 px-6 lg:px-14 lg:py-6  bg-white border border-[#2563EB] rounded-lg flex items-center justify-center'>
                  <Image 
                  src={logothird}
                  height={100}
                  width={100}
                  alt='AAMI'
                   className='object-cover'
                  />
              </div>
              <div className='py-2 px-6 lg:px-14 lg:py-6  bg-white border border-[#2563EB] rounded-lg flex items-center justify-center'>
                  <Image 
                  src={logofourth}
                  height={100}
                  width={100}
                  alt='AAMI'
                   className='object-cover'
                  />
              </div>
              <div className='py-2 px-6 lg:px-14 lg:py-6  bg-white border border-[#2563EB] rounded-lg flex items-center justify-center'>
                  <Image 
                  src={logofifth}
                  height={100}
                  width={100}
                  alt='AAMI'
                   className='object-cover'
                  />
              </div>
              <div className='py-2 px-6 lg:px-14 lg:py-6 6 bg-white border border-[#2563EB] rounded-lg flex items-center justify-center'>
                  <Image 
                  src={logosixth}
                  height={100}
                  width={100}
                  alt='AAMI'
                   className='object-cover'
                  />
              </div>
              
          </div>
    </div>
   </div>
  )
}

export default LogoSection