import Image from 'next/image'

export default function Info() {
    return (
        <>
            <div className='md:h-screen p-5'>
                <h4 className='md:flex md:justify-center text-sm tracking-[0.3rem]'>A REAL STATE AND PROPERTY PLATFORM THAT IS CHANGING THE WORLD</h4>
                <div className=' text-left'>
                    <div className='p-5 mt-5'>
                        <h3 className='font-meduim text-2xl tracking-wide '>A REVOLUTIONARY PLATFORM</h3>
                        <h2 className='font-meduim text-[2.3rem] tracking-wide'>ENTRIES - SELLERS</h2>
                        <h1 className='text-[3.5rem] tracking-wider'>WORLDWIDE</h1>
                    </div>
                    <div className='p-5 text-left mt-[155px]'>
                        <h3 className='font-meduim text-2xl tracking-wide pz-5 px-0'>THE BEST OF THE BEST</h3>
                        <p className='py-8 px-0 text-sm text-[#505050] tracking-[0.1rem] leading-8'>A COMBINATION OF AUTOMATION AND MANUAL CURATION OUR PRO AGENTS AND <br />
                            MODERATION TEAM SELECTS THE HIGHEST QUALITY LISTINGS ON THE MARKET <br />
                            FROM ACROSS THE WORLD.</p>
                    </div>
                </div>
                <div className='md:relative md:bottom-[450px] md:float-right p-5'>
                    <div>
                        <Image
                            src='/logos/ZIMO ZIG B.png'
                            width={400}
                            height={200}
                        />
                        <p className='text-[#393939] text-sm tracking-[0.1rem] py-8 px-0 leading-8'>CONNECTING USERS FROM ACROSS THE GLOBE <br />
                            TO FACILITATE LIFE'S MOST IMPORTANT <br />
                            PERSONAL TRANSACTIONS
                        </p>
                    </div>
                </div>
            </div>
            <div className='md:flex md:flex-row md:justify-center mb-10'>
                <Image className='justify-center'
                    src='/ZIMO Arrow.png'
                    width={100}
                    height={100}
                />
            </div>
            {/* </div> */}
        </>
    )
}