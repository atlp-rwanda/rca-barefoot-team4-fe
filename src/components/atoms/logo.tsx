import Image from 'next/image'

export default function Logo() {
  return (
    <div className="flex">
        <Image src={'/assets/images/plan-red-logo.png'} width={30} height={30} alt="Logo" />
        <h4 className="text-sm text-red-default mt-2 ml-1 font-medium">Barefoot Nomad</h4>
      </div>
  )
}