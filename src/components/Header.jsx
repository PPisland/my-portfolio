// import Logo from "../images/pubg-logo-battlegrounds.png";
import HEADER from "../images/f8eba5_460d0bdab99f487188a17916c22a9abe_mv2.webp";

const Header = () => {
  return (
    <header className="h-[85px] md:h-[91px]">
      <img
        className="w-full h-[85px] md:h-[91px] absolute  "
        src={HEADER}
        alt="header"
      />
      <div className="max-w-screen-2xl mx-auto  h-full flex justify-between items-center relative top-[50%] translate-y-[-50%] ">
        {/* <div>PPisland's Portfolio</div> */}

        <div>
          {/* <img
            className="w-34 h:8 md:h-18  object-cover"
            src={Logo}
            alt="logo"
          /> */}
          <div className="w-34 h-8 md:h-18 text-2xl font-bold text-white">
            Portfolio
          </div>
        </div>
        <ul className="flex gap-2 md:gap-6 sm:text-sm text-xs md:text-base ">
          <li className="bg-indigo-300 bg-opacity-50 btn-style">Introduce</li>
          <li className="bg-purple-300 bg-opacity-50 btn-style">Portfolio</li>
          <li className="bg-blue-300 bg-opacity-50 btn-style">Contact Me</li>
        </ul>
      </div>
    </header>
  );
};

export default Header;
