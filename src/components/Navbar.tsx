import Image from 'next/image'
import Logo from './atoms/logo';
import ProfileArea from './atoms/profile-area';
import SearchBar from './atoms/search-bar';
const Navbar = () => {
  return (
    <div className="navbar bg-white shadow-md px-20 py-2 flex mb-0">
        <div className="flex-1">
          <Logo/>
        </div>
        <div className="flex-1">
          <SearchBar/>
        </div>
        <div className="flex-1">
          <ProfileArea/>
        </div>
    </div>
  )
};

export default Navbar;
