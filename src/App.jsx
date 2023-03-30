import Logo from "./images/pubg-logo-battlegrounds.png";

function App() {
  //리턴 밖에선 이렇게 주석작성

  return (
    <div className="bg-red-100 min-h-screen">
      {/* 안에선 이렇게 주석 달아야됨 근데 걍 Ctrl+ /쓰셈*/}
      <header className="bg-blue-100 h-12 md:h-20">
        <div className="max-w-screen-xl mx-auto  h-full flex justify-between items-center">
          {/* <div>PPisland's Portfolio</div> */}
          <div>
            <img className="w-42" src={Logo} alt="logo" />
          </div>
          <ul className="flex gap-2 md:gap-8 sm:text-sm text-xs md:text-base">
            <li className="bg-indigo-300 btn-style">Introduce</li>
            <li className="bg-purple-300 btn-style">Portfolio</li>
            <li className="bg-blue-300 btn-style">Contact Me</li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
