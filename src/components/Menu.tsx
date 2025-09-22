const Menu = () => {
  return (
    <ul className="mt-10 space-y-6">
      <li className="group opacity-0 animate-[slideInFromLeft_0.8s_ease-out_0.8s_forwards]">
        <a
          href="#about"
          className="relative block text-lg transition-all duration-300 ease-out hover:text-white hover:translate-x-2 group-hover:opacity-100"
        >
          <span className="relative z-10">about me</span>
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-zinc-700 transition-all duration-300 ease-out group-hover:w-6 group-hover:bg-white group-hover:animate-[expandLine_0.3s_ease-out_forwards]"></div>
        </a>
      </li>
      <li className="group opacity-0 animate-[slideInFromLeft_0.8s_ease-out_1.0s_forwards]">
        <a
          href="#experience"
          className="relative block text-lg transition-all duration-300 ease-out hover:text-white hover:translate-x-2 group-hover:opacity-100"
        >
          <span className="relative z-10">work experience</span>
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-zinc-700 transition-all duration-300 ease-out group-hover:w-6 group-hover:bg-white group-hover:animate-[expandLine_0.3s_ease-out_forwards]"></div>
        </a>
      </li>
      <li className="group opacity-0 animate-[slideInFromLeft_0.8s_ease-out_1.2s_forwards]">
        <a
          href="#projects"
          className="relative block text-lg transition-all duration-300 ease-out hover:text-white hover:translate-x-2 group-hover:opacity-100"
        >
          <span className="relative z-10">projects</span>
          <div className="absolute -left-8 top-1/2 -translate-y-1/2 w-0 h-0.5 bg-zinc-700 transition-all duration-300 ease-out group-hover:w-6 group-hover:bg-white group-hover:animate-[expandLine_0.3s_ease-out_forwards]"></div>
        </a>
      </li>
    </ul>
  );
};

export default Menu;
