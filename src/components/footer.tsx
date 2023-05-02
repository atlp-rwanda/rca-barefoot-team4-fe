import Logo from './atoms/logo';

const Footer = () => {
  return (
    <footer className="bg-[#FCDDEC]">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="justify-between md:flex">
          <div className="mb-6 flex flex-col items-center justify-between md:mb-0">
            <Logo withText={false} />
            <p className="text-sm font-medium text-red-default">
              Barefoot Nomad
            </p>
          </div>
          <div className="">
            <h2 className="text-sm font-semibold uppercase text-red-default md:mb-6">
              About Us
            </h2>
            <p className="w-96 text-xs font-light text-red-default">
              Barefoot Nomad is a travel booking application that enables
              Company Nomads to book their international travel and
              accommodation across all the locations where the Company has its
              operations.
            </p>
          </div>
          <div className="mt-5">
            <h2 className=" text-sm font-semibold uppercase text-red-default md:mb-6">
              Contact Us
            </h2>
            <ul className="text-xs text-red-default">
              <li className="flex md:mb-3">
                <span className="mr-2">
                  <svg
                    id="Layer_1"
                    className="inline align-text-top"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="15"
                    height="15"
                  >
                    <path
                      d="M48.36,37a7.3,7.3,0,0,0-4.59-4.16c-1.38-.39-2.76-.82-4.13-1.25L37.76,31A6.81,6.81,0,0,0,31,32.78l-1.54,1.5A21.12,21.12,0,0,1,15.89,20.41C17.45,19,20.45,15.7,18.8,12l-.52-1.82-.59-2.09-.6-2A5.83,5.83,0,0,0,16,4a7.35,7.35,0,0,0-3.08-2.3,8.19,8.19,0,0,0-5.13-.11A6.08,6.08,0,0,0,5.26,3.3l-.38.36A25.93,25.93,0,0,0,2.61,6a8.53,8.53,0,0,0-.93,1.31A4,4,0,0,0,1.19,9c0,.34,0,.69,0,1v.37c0,.81,0,1.63.07,2.43A37.29,37.29,0,0,0,4.7,26.38a38.62,38.62,0,0,0,4.8,7.67,39.54,39.54,0,0,0,6.35,6.32,39,39,0,0,0,7.56,4.72A37.42,37.42,0,0,0,31.83,48a35.75,35.75,0,0,0,7.55.81l1,0a5.2,5.2,0,0,0,3.18-1.07,12.49,12.49,0,0,0,1-1l.37-.38,2.24-2.2A6.08,6.08,0,0,0,48.67,41,6.63,6.63,0,0,0,48.36,37Zm-2.63,3.32a4.19,4.19,0,0,1-.58,1.63l-2.3,2.24-.43.44a10.07,10.07,0,0,1-.75.73,2.5,2.5,0,0,1-1.39.42A33.32,33.32,0,0,1,32.46,45a35.4,35.4,0,0,1-7.76-2.65A36.94,36.94,0,0,1,11.84,32.18,35.34,35.34,0,0,1,7.42,25.1,34.17,34.17,0,0,1,4.79,17a33.37,33.37,0,0,1-.55-4.35c0-.73-.07-1.48-.07-2.23V10c0-.24,0-.49,0-.74h0a1.21,1.21,0,0,1,.11-.48,6.36,6.36,0,0,1,.63-.86,19.93,19.93,0,0,1,2-2.07l.45-.43a4.91,4.91,0,0,1,1.2-1,6.87,6.87,0,0,1,1.72-.25,4.26,4.26,0,0,1,1.54.27,4.45,4.45,0,0,1,1.82,1.38,3,3,0,0,1,.58,1.07c.2.66.39,1.32.58,2s.4,1.38.59,2.07L16,12.94l.08.22c1.2,2.55-2.7,5.48-2.74,5.5l-.85.62.28,1A23.77,23.77,0,0,0,29.63,37.42l.78.17,2.78-2.72.12-.13a3.83,3.83,0,0,1,3.57-.88l1.86.58c1.4.44,2.8.87,4.21,1.28a4.26,4.26,0,0,1,2.64,2.42A3.67,3.67,0,0,1,45.73,40.31Z"
                      fill="#FE0000"
                    ></path>
                  </svg>
                </span>
                <span className="font-light text-red-default hover:no-underline">
                  +250 7819 50304
                </span>
              </li>
              <li className="mb-3 flex">
                <span className="mr-2">
                  <svg
                    id="Layer_1"
                    className="inline align-text-top"
                    data-name="Layer 1"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    width="15"
                    height="15"
                  >
                    <path
                      d="M48.36,37a7.3,7.3,0,0,0-4.59-4.16c-1.38-.39-2.76-.82-4.13-1.25L37.76,31A6.81,6.81,0,0,0,31,32.78l-1.54,1.5A21.12,21.12,0,0,1,15.89,20.41C17.45,19,20.45,15.7,18.8,12l-.52-1.82-.59-2.09-.6-2A5.83,5.83,0,0,0,16,4a7.35,7.35,0,0,0-3.08-2.3,8.19,8.19,0,0,0-5.13-.11A6.08,6.08,0,0,0,5.26,3.3l-.38.36A25.93,25.93,0,0,0,2.61,6a8.53,8.53,0,0,0-.93,1.31A4,4,0,0,0,1.19,9c0,.34,0,.69,0,1v.37c0,.81,0,1.63.07,2.43A37.29,37.29,0,0,0,4.7,26.38a38.62,38.62,0,0,0,4.8,7.67,39.54,39.54,0,0,0,6.35,6.32,39,39,0,0,0,7.56,4.72A37.42,37.42,0,0,0,31.83,48a35.75,35.75,0,0,0,7.55.81l1,0a5.2,5.2,0,0,0,3.18-1.07,12.49,12.49,0,0,0,1-1l.37-.38,2.24-2.2A6.08,6.08,0,0,0,48.67,41,6.63,6.63,0,0,0,48.36,37Zm-2.63,3.32a4.19,4.19,0,0,1-.58,1.63l-2.3,2.24-.43.44a10.07,10.07,0,0,1-.75.73,2.5,2.5,0,0,1-1.39.42A33.32,33.32,0,0,1,32.46,45a35.4,35.4,0,0,1-7.76-2.65A36.94,36.94,0,0,1,11.84,32.18,35.34,35.34,0,0,1,7.42,25.1,34.17,34.17,0,0,1,4.79,17a33.37,33.37,0,0,1-.55-4.35c0-.73-.07-1.48-.07-2.23V10c0-.24,0-.49,0-.74h0a1.21,1.21,0,0,1,.11-.48,6.36,6.36,0,0,1,.63-.86,19.93,19.93,0,0,1,2-2.07l.45-.43a4.91,4.91,0,0,1,1.2-1,6.87,6.87,0,0,1,1.72-.25,4.26,4.26,0,0,1,1.54.27,4.45,4.45,0,0,1,1.82,1.38,3,3,0,0,1,.58,1.07c.2.66.39,1.32.58,2s.4,1.38.59,2.07L16,12.94l.08.22c1.2,2.55-2.7,5.48-2.74,5.5l-.85.62.28,1A23.77,23.77,0,0,0,29.63,37.42l.78.17,2.78-2.72.12-.13a3.83,3.83,0,0,1,3.57-.88l1.86.58c1.4.44,2.8.87,4.21,1.28a4.26,4.26,0,0,1,2.64,2.42A3.67,3.67,0,0,1,45.73,40.31Z"
                      fill="#FE0000"
                    ></path>
                  </svg>
                </span>
                <span className="font-light text-red-default hover:no-underline">
                  +250 7819 50304
                </span>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase text-red-default md:mb-5">
              Newsletter
            </h2>
            <h4 className="text-xs font-normal uppercase text-red-default md:mb-6 md:text-sm">
              Subscribe to our Newsletter
            </h4>
            <div className="relative w-full">
              <input
                type="search"
                id="search-dropdown"
                className="block w-full rounded-3xl border border-red-default px-2.5 py-1.5 text-xs text-red-default focus:border-red-default focus:outline-none"
                placeholder="Enter Email"
                required
              />
              <button
                type="submit"
                className="absolute right-0 top-0 rounded-r-3xl border border-red-default bg-red-default px-4 py-1.5 text-xs text-white hover:bg-opacity-[0.9] focus:outline-none"
              >
                <span>SEND</span>
              </button>
            </div>
          </div>
        </div>
        <hr className="my-6 border-red-default sm:mx-auto lg:my-5" />
        <div className="flex justify-center">
          <span className="text-center text-sm uppercase text-red-default">
            © 2023 © Copyright 2023 barefoot nomads.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
