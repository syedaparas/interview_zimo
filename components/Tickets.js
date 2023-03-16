import Image from 'next/image'

export default function Tickets(){
    return (
        <>
        <div className='p-5 py-0 m-0'>
<div className='md:flex md:justify-between p-5 m-8'>
    <div className='p-5 px-0 md:float-left md:flex md:flex-col mt-20 md:w-100'>
        <Image className='mt-8'
        src='/logos/ZIMO B.png'
        width={500}
        height={500}
        />
        <h2 className='text-left pt-5 font-meduim text-3xl tracking-[0.2rem]'>ONE SOURCE</h2>
        <h1 className='text-left pt-2 text-5xl tracking-[0.2rem]'>ENTRY TICKETS</h1>
        <p className='text-left py-3 text-[#696969] tracking-[0.2rem]'>FOR ALL PREMIUM LISTINGS</p>
    </div>
    <div className='md:ml-20  md:h-[100vh]'>
        <Image className='rounded-2xl brightness-50 md:h-[80vh]'
        src='/images/Property 1821.jpg'
        width={900}
        height={900}
        />
        <p className='text-2xl py-5 m-5  tracking-[0.2rem]'>LET YOUR DREAMS FIND YOU</p>
    </div>
</div>
        </div>
        <div> 
        <div className='md:bg-cover'>
            <Image className='md:w-full md:h-[100vh]'
            src='/images/Yacht 1821.jpg'
            width={1400}
            height={900}
            />
        </div>
        <div className='md:relative md:bottom-[400px] md:px-5 md:ml-[100px] opacity-50'>
            <Image
            src='/logos/ZIMO ZIG W.png'
            width={400}
            height={100}
            />
            </div>
            {/* <div> */}
            <div className='md:relative bottom-[700px] md:float-right py-0 mr-10'>
                <h1 className='text-3xl p-5 text-[#FBFCFC] text-left font-medium  tracking-[0.2rem]'>PERSONALISED FOR YOU</h1>
                <p className='text-left text-[#97abb2] text-sm tracking-wider p-5 leading-6'>DELIVERING THOUSANDS OF PERSONALISED ALERTS<br/>
EVERYDAY, OUR USERS CAN BE FIRST IN LINE WHEN<br/>
THAT OPPORTUNITY OF A LIFETIME IS HERE.</p>
            </div>
            <div className='md:flex md:flex-row md:relative md:bottom-[480px] left-[500px] float-right'>
            <div  className='p-2'>
                <p className='text-white'>CREATE USER ID</p>
            </div>
            <div className='p-2'>
            <Image
                    src='/right_arrow.png'
                    width={20}
                    height={20}
                    />
            </div>
            </div>
            {/* </div> */}
        </div>
        </>
    )
}