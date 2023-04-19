import Image from 'next/image'
const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md px-20 py-2 flex">
        <div className="flex-1">
          <div className="flex">
            <Image src={'/assets/images/plan-red-logo.png'} width={30} height={30} alt="Logo" />
            <h4 className="text-sm text-[#F20544] mt-2 ml-1 font-medium">Barefoot Nomad</h4>
          </div>
        </div>
        <div className="flex-1">2</div>
        <div className="flex-auto">3</div>
    </div>
  )
};

export default Navbar;
