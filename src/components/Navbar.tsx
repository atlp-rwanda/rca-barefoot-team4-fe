import Logo from './atoms/logo';
import ProfileArea from './atoms/profile-area';
import SearchBar from './atoms/search-bar';

const Navbar = () => {
  return (
    <div className="navbar mb-0 flex bg-white px-20 py-2 shadow-md">
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
