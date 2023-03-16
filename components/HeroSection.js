import Image from 'next/image'

export default function HeroSection(){
    return (
      <> 
        <div className='md:flex items-center justify-center h-screen p-20 mb-20 bg-fixed bg-center bg-cover'>
        <div className='md:absolute top-0 left-0 right-0 bottom-0 bg-black/70 w-full h-full' />
        <Image className='md:bg-contain md:absolute top-0 h-[130%] w-[100vw]'
        src="/images/ZIMO Pro.png"
        width= {1400}
        height={100}
        priority
        />
         
        <div className='md:absolute left-5 text-left p-5 pt-0 text-white float-left'> 
        <div className='md:relative md:bottom-[250px] md:right-[100] md:flex md:flex-row'>
          <Image
          src='/left_arrow.png'
          width={20}
          height={20}
          />
          <p className='md:px-3'>BACK</p>
        </div>
        <div>
          <h2 className='text-3xl font-meduim'>DISCOVER</h2>
          <h1 className='py-5 text-5xl'>A NEW WORLD</h1>
          <p className='py-2 text-[#696969]'>FOR THOSE WHO WISH FOR MORE...</p>
          {/* <button className='px-8 py-2 border'>Book</button> */}
         </div>
         </div>
         <div className='md:items-center md:absolute md:top-[110%] text-[#696969]'>
            <p>BRINGING THE WORLD CLOSER TOGETHER</p>
            <div className='md:flex md:justify-center'>
            <Image
            src='/down_arrow w.png'
            width={80}
            height={80}
            />  
            </div>
         </div>
      </div>
      </>
    )
}