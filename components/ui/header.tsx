import Link from "next/link";
import MobileMenu from "./mobile-menu";

export default function Header() {
  return (
    <header className="absolute w-full z-30 ">
      <div className="max-w-xxl mx-auto px-4 sm:px-6">
        <div className="sm:px-1 md:px-40 flex items-center justify-between h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link href="#home" className="flex items-center" aria-label="AbundEarth Alliance">
              <svg className="w-8 h-8 mr-4 fill-current text-amber-600" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {" "}
                <path
                  fill="currentColor"
                  d="M12 0c-1.326 0-2.597.22-3.787.613c4.94-1.243 8.575 1.72 11.096 5.606c1.725 2.695 2.813 2.83 4.207 2.412A11.956 11.956 0 0 0 12 0M7.658 2.156c-1.644.019-3.295.775-4.931 2.207A11.97 11.97 0 0 0 0 12c.184-2.823 2.163-5.128 4.87-5.07c2.104.044 4.648 1.518 7.13 5.289c4.87 7.468 10.917 5.483 11.863 1.51c.081-.566.137-1.14.137-1.729c0-.176-.02-.347-.027-.521c-1.645 1.725-4.899 2.35-8.264-2.97c-2.59-4.363-5.31-6.383-8.05-6.353zM3.33 13.236c-1.675.13-2.657 1.804-2.242 3.756A11.96 11.96 0 0 0 12 24c4.215 0 7.898-2.149 10.037-5.412v-.043c-2.836 3.49-8.946 4.255-13.855-2.182c-1.814-2.386-3.544-3.228-4.852-3.127"
                />
              </svg>
              <div className="text-lg font-bold text-amber-600 font-notosans">AbundEarth Alliance</div>
            </Link>
          </div>

          {/* Desktop navigation */}
          <nav className="hidden md:flex md:grow">
            {/* Desktop sign in links */}
            <ul className="flex grow justify-end flex-wrap items-center font-notosans">
              <li>
                <Link href="#what" className="font-medium text-amber-800 hover:text-amber-600 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  What we do
                </Link>
              </li>
              <li>
                <Link href="#partners" className="font-medium text-amber-800 hover:text-amber-600 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  Our Partners
                </Link>
              </li>
              <li>
                <Link href="#about" className="font-medium text-amber-800 hover:text-amber-600 px-4 py-3 flex items-center transition duration-150 ease-in-out">
                  About Us
                </Link>
              </li>

              <li>
                <Link href="#contact" className="btn-sm text-white bg-amber-600 hover:bg-amber-800 ml-3">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
