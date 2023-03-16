import Image from 'next/image'

export default function Categories() {
    return (
        <>
            <div>
                <div className='md:flex md:flex-row md:justify-between md:p-5'>
                    <h2 className='text-3xl p-5 px-0 tracking-wide'>OUR CATEGORIES</h2>
                    <div>
                        <Image
                            src='/ZIMO Slider Arrows.png'
                            width={130}
                            height={150}
                        />
                    </div>
                </div>
                <div className='md:flex md:flex-row md:justify-between p-5'>
                    {/* <div className='flex justify-between'> */}
                    <div>
                        <Image className='rounded-2xl md:h-[45vh]'
                            src='/images/REAL ESTATE 1.jpg'
                            alt='real estate'
                            width={300}
                            height={300}
                        />
                        <p className='relative bottom-[15%] text-white font-meduim'>REAL ESTATE</p>
                    </div>
                    <div>
                        <Image className='rounded-2xl md:h-[45vh]'
                            src='/images/CARS.png'
                            alt='cars'
                            width={300}
                            height={300}
                        />
                        <p className='relative bottom-[15%] text-white font-meduim tracking-wide'>CARS</p>
                    </div>
                    <div>
                        <Image className='rounded-2xl md:h-[45vh]'
                            src='/images/YACHTS.png'
                            alt='yachts'
                            width={300}
                            height={300}
                        />
                        <p className='relative bottom-[15%] text-white font-meduim tracking-wide'>YACHTS</p>
                    </div>
                    <div>
                        <Image className='rounded-2xl md:h-[45vh]'
                            src='/images/DIAMONDS.jpg'
                            alt='diamonds'
                            width={300}
                            height={300}
                        />
                        <p className='relative bottom-[15%] text-white font-meduim tracking-wider'>WATCHES</p>
                    </div>
                </div>
                <div className='text-center m-5 p-5'>
                    <h1 className='text-4xl p-5 tracking-[0.29rem]'>ONE PLATFORM FOR ALL PREMIUM LISTINGS</h1>
                    <h2 className='text-3xl p-5 leading-15 mt-2 teacking-[0.1rem] mb-10'>UNLIMITED POTENTIAL</h2>
                </div>
            </div>
            {/* </div> */}
        </>
    )
}

