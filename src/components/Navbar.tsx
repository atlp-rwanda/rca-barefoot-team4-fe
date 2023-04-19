import Image from 'next/image'
import Logo from './atoms/logo';
import SearchBar from './atoms/search-bar';
const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md px-20 py-2 flex">
        <div className="flex-1">
          <Logo/>
        </div>
        <div className="flex-1">
          <SearchBar/>
        </div>
        <div className="flex-auto">3</div>
    </div>
  )
};

export default Navbar;
