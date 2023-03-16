import Image from 'next/image'

export default function PartnerCompanies(){
    return (
        <>
        <hr className='divide-black'/>
        <div className='h-[100%] p-[300px] flex flex-row justify-between'>
            <div className='flex flex-col justify-evenly'> 
            <Image 
            src='/logos/ZIMO B.png'
            width={160}
            height={160}
            />
            <p className='text-[#696969] font-meduim text-3xl p-5 px-0'>PARTNERS</p>
            </div>
            <div  className='flex flex-col justify-evenly'> 
            <Image
            src='/logos/CIVICA CES B.png'
            width={180}
            height={180}
            />
            <Image className='px-5'
            src='/logos/Barclays.png'
            width={180}
            height={180}
            />
            </div>
        </div>
        <div className='h-full bg-[#eeecec]'>
            <div className='bg-contain'>
                <Image
                src='/images/Yacht 1822.jpg'
                width={1400}
                height={100}
                />
            </div>
            <div className='flex flex-row relative bottom-[300px]'> 
            <div className='w-full h-[50vh] p-[5%] py-0'>
                <Image className='rounded-2xl'
                src='/images/Car 1821.jpg'
                width={400}
                height={100}
                />
            </div>
            <div className='absolute right-[5%] top-[70%] opacity-50 text-[#E6E6E6]'>
                <Image
                src='/logos/ZIMO ZIG W.png'
                width={550}
                height={700}
                />
            </div>
            </div>
        </div>
        </>
    )
}