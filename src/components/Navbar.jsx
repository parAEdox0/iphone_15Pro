const Navbar = () => {
  return (
    <header>
      <nav className="h-11 flex items-center justify-between px-4 lg:justify-center lg:gap-20">
        <img src="assets/logo.png" className="h-[42%] cursor-pointer" />
        <div className="hidden md:flex gap-11 items-center text-sm text-zinc-400 ">
          <p className="cursor-pointer hover:text-zinc-50">Store</p>
          <p className="cursor-pointer hover:text-zinc-50">Mac</p>
          <p className="cursor-pointer hover:text-zinc-50">Entertainment</p>
          <p className="cursor-pointer hover:text-zinc-50">Accesories</p>
          <p className="cursor-pointer hover:text-zinc-50">Support</p>
        </div>
        <div className="flex items-center gap-12">
          <img src="icons/search.png" className="h-5" />
          <img src="icons/bag.png" className="h-5" />
          <img src="icons/menu.png" className="h-5 md:hidden" />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
