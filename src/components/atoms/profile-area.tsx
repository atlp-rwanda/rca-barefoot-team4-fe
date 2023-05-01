import Image from 'next/image';
import Link from 'next/link';

export default function ProfileArea() {
  return (
    <div className="mb-0 mt-3 flex items-center justify-between md:mt-0 md:justify-end">
      <Image
        className="mr-12 cursor-pointer"
        src={'/assets/images/Heart.png'}
        width={25}
        height={20}
        alt="Logo"
      />
      <Image
        className="mr-12 cursor-pointer"
        src={'/assets/images/Alarm.png'}
        width={25}
        height={20}
        alt="Logo"
      />
      <div className="flex">
        <Image
          className="rounded-full"
          src={'https://ui-avatars.com/api/?background=random'}
          width={35}
          height={20}
          alt="Profile"
        />
        <div className="ml-2">
          <p className="xs:none mb-0 text-xs font-medium">Username</p>
          <Link href={'/user/profile'}>
            <span className="relative mt-[-0.1rem] block text-xs text-red-default underline focus:outline-none">
              Profile
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
}
