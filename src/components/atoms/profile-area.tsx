import Image from 'next/image'
import Link from 'next/link'

export default function ProfileArea() {
  return (
    <div className="flex items-center justify-end mb-0">
        <Image className="mr-12 cursor-pointer" src={'/assets/images/Heart.png'} width={25} height={20} alt="Logo" />
        <Image className="mr-12 cursor-pointer" src={'/assets/images/Alarm.png'} width={25} height={20} alt="Logo" />
        <div className='flex'>
          <Image className='rounded-full' src={'https://ui-avatars.com/api/?background=random'} width={35} height={20} alt="Profile" />
          <div className='ml-2'>
            <p className='text-xs mb-0 font-medium'>Username</p>
            <Link href={'/user/profile'}>
              <span className='text-xs relative block mt-[-0.1rem] text-red-default underline focus:outline-none'>Profile</span>
            </Link>
          </div>
        </div>
    </div>
  )
}