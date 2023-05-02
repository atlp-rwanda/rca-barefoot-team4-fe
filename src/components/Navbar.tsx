import Logo from './atoms/logo';
import ProfileArea from './atoms/profile-area';
import SearchBar from './atoms/search-bar';

const Navbar = () => {
  return (
    <div className="mb-0 w-full bg-white p-4 shadow-md md:flex md:px-20 md:py-2">
      <div className="flex-1">
        <Logo />
      </div>
      <div className="flex-1">
        <SearchBar />
      </div>
      <div className="flex-1">
        <ProfileArea />
      </div>
    </div>
  );
};

export default Navbar;
