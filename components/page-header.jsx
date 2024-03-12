import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
    return (
        <header className="absolute top-0 left-0 w-full p-5 border-b border-champagne-pink-20 border-solid z-[4]" data-header>
        <div className="flex justify-between items-center">
    
          <h1>
          <a href="#" className="text-white font-rubik text-[2.8rem] font-bold tracking-[-2px]">Foodie<span className="inline-block text-deep-saffron">.</span></a>
          </h1>
    
          <nav className="absolute top-full left-1/2 transform -translate-x-1/2 w-[calc(100%-30px)] bg-white px-5 shadow-md h-0 overflow-hidden invisible transition-all min-[992px]:all-unset min-[992px]:ml-auto" data-navbar>
            <ul className="mb-[10px] min-[992px]:mb-0 min-[992px]:flex min-[992px]:gap-[5px]">
    
              <li className="nav-item">
                <a href="#home" className="navbar-link" data-nav-link>Home</a>
              </li>
    
              <li className="nav-item">
                <a href="#about" className="navbar-link" data-nav-link>About Us</a>
              </li>
    
              <li className="nav-item">
                <a href="#food-menu" className="navbar-link" data-nav-link>Shop</a>
              </li>
    
              <li className="nav-item">
                <a href="#blog" className="navbar-link" data-nav-link>Blog</a>
              </li>
    
              <li className="nav-item">
                <a href="#" className="navbar-link" data-nav-link>Contact Us</a>
              </li>
    
            </ul>
          </nav>
    
          <div className="flex items-center gap-[20px]">
            <button className="text-champagne-pink-20 text-[20px]" aria-label="Search" data-search-btn>

                <IoSearchOutline className="block" style={{ strokeWidth: "50px" }}/>
            </button>
    
            <button className="btn btn-hover">Reservation</button>
    
            <button className="nav-toggle-btn" aria-label="Toggle Menu" data-menu-toggle-btn>
              <span className="line top"></span>
              <span className="line middle"></span>
              <span className="line bottom"></span>
            </button>
          </div>
    
        </div>
      </header>
    )
}