import { IoSearchOutline } from "react-icons/io5";

export default function Header() {
  return (
    <header className="block absolute top-0 left-0 w-full py-5 border-solid border-b border-champagne-pink-20 z-[4]" data-header>
      <div className="flex justify-between items-center mx-auto w-full px-[15px] gap-[20px] max-w-[1200px]">

        <h1 className="text-white block text-[2em] mx-[0.67em] font-bold">
          <a href="#" className="text-white font-rubik text-[28px] font-bold tracking-[-2px]">Foodie<span className="inline-block text-deep-saffron">.</span></a>
        </h1>

        <nav className="ml-auto" data-navbar>
          <ul className="flex gap-[5px] mx-0 pl-[40px]">

            <li className="border-b-0 list-none">
              <a href="#home" className="text-champagne-pink tracking-[-0.5px] text-[15px] font-rubik font-500 px-[10px] py-[15px]" data-nav-link>Home</a>
            </li>

            <li className="border-b-0 list-none">
              <a href="#about" className="text-champagne-pink tracking-[-0.5px] text-[15px] font-rubik font-500 px-[10px] py-[15px]" data-nav-link>About Us</a>
            </li>

            <li className="border-b-0 list-none">
              <a href="#food-menu" className="text-champagne-pink tracking-[-0.5px] text-[15px] font-rubik font-500 px-[10px] py-[15px]" data-nav-link>Shop</a>
            </li>

            <li className="border-b-0 list-none">
              <a href="#blog" className="text-champagne-pink tracking-[-0.5px] text-[15px] font-rubik font-500 px-[10px] py-[15px]" data-nav-link>Blog</a>
            </li>

            <li className="border-b-0 list-none">
              <a href="#" className="text-champagne-pink tracking-[-0.5px] text-[15px] font-rubik font-500 px-[10px] py-[15px]" data-nav-link>Contact Us</a>
            </li>

          </ul>
        </nav>

        <div className="flex items-center gap-[20px]">
          <button className="text-champagne-pink text-[20px] cursor-pointer" aria-label="Search" data-search-btn>
            <IoSearchOutline className="block" style={{ strokeWidth: "50px" }} />
          </button>

          <button className="block bg-dark-orange text-[14px] text-white font-rubik font-500 h-[45px] px-[35px]">Reservation</button>

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