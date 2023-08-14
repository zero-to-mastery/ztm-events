import Image from 'next/image'

export default function Logo() {
    return (
        <>
        <Image 
        className='ml-4'
        src='/images/meetupLogo.png'
        height={100}
        width={100}
        alt="meetup logo"
        />
        </>
    )
}