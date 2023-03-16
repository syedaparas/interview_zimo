import Image from 'next/image'


export default function Navbar() {
    return (
        <>
        <div className='md:flex md:flex-row md:justify-between md:p-5 md:z-30'>
            <ul className='md:float-right md:flex md:flex-row md:h-full'>
                <li className='md:h-full md:p-5 md:px-5'>
                    <Image 
                    src='/logos/ZIMO Menu Icon W.png'
                    alt='zimo icon'
                    width={50}
                    height={100}
                    />
                </li>
                <li className='md:h-full p-5'>
                    <Image 
                    src='/logos/ZIMO W.png'
                    width={140}
                    height={100}
                    />
                </li>
                <li className='md:w-15 mt-4 py-5 px-1 p-5 text-white'>ABOUT</li>
            </ul>
            <ul className='pl-8 p-5 md:flex md:justify-center'> 
                <li>
            <Image
            src='/logos/ZIMO ZIG W.png'
            width={140}
            height={30}
            />
            </li>
            </ul>
            <ul className='md:float-left md:h-full p-5 pl-0 md:flex md:flex-row md:h-full'>
            <li className='md:h-full m-5 mt-0'>
                <Image   
                    src='/logos/ZIMO C I.png'
                    width={300}
                    height={300}
                    />
                </li>
                <li className='md:h-full m-5 mt-2'>
                <Image   
                    src='/logos/shopping-bag.png'
                    width={25}
                    height={20}
                    />
                </li>
                <li className='m-2 mt-2'>
                <Image 
                    src='/logos/ZIMO User Icon W.png'
                    width={20}
                    height={20}
                    />
                </li>
            </ul>
        </div>
        </>
    );
}
