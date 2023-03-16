import Image from 'next/image'

export default function Global() {
    return (
        <div>
            <div>
                <Image
                    src='/images/World Map (dots).png'
                    width={1400}
                    height={400}
                />
            </div>
            <div className='md:relative md:bottom-[500px]'>
                <h1 className=' font-meduim text-3xl p-8'>GLOBAL VISION</h1>
                <p className='text-center p-3 text-meduim font-Lato text-[#07030b]'>WITH A REMOTE CULTURE, DIVERSITY IS NATURALLY IN OUR DNA.<br />
                    BAS ED ACROSS THE GLOBE, MAKING UP OVER 23 DIFFERENT NATIONALITIES.</p>
            </div>
        </div>
    )
}