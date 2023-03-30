import Logo from "./images/pubg-logo-battlegrounds.png";
import HEADER from "./images/f8eba5_460d0bdab99f487188a17916c22a9abe_mv2.webp";

function App() {
  //리턴 밖에선 이렇게 주석작성

  return (
    <div className="bg-[#f7f7f7] min-h-screen">
      {/* 안에선 이렇게 주석 달아야됨 근데 걍 Ctrl+ /쓰셈*/}
      <header className="h-[85px] md:h-[91px]">
        <div className="z-0">
          <img
            className="w-full h-[85px] md:h-[91px] z-0"
            src={HEADER}
            alt="header"
          />
          <div className="max-w-screen-xl mx-auto  h-full flex justify-between items-center z-20">
            {/* <div>PPisland's Portfolio</div> */}

            <div>
              <img
                className="w-34 h:8 md:h-18  object-cover"
                src={Logo}
                alt="logo"
              />
            </div>
            <ul className="flex gap-2 md:gap-6 sm:text-sm text-xs md:text-base text-">
              <li className="bg-indigo-300 btn-style">Introduce</li>
              <li className="bg-purple-300 btn-style">Portfolio</li>
              <li className="bg-blue-300 btn-style">Contact Me</li>
            </ul>
          </div>
        </div>
      </header>
      <main>
        {/* Introduce */}
        <div className="bg-green-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center ">
          여기에 나를 소개하는 내용을 적으면 됩니다.
        </div>
        <ul className="bg-indigo-100 max-w-screen-xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center py-8">
          {/* object-cover */}
          <li className="bg-purple-200 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2 ">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-200 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2 ">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-200 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2 ">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-200 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2 ">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-200 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2 ">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
          <li className="bg-purple-200 w-60 h-72 rounded-xl">
            <div className="bg-yellow-100 w-full h-1/2 rounded-t-xl">
              프로젝트 이미지
            </div>
            <div className="text-xl font-bold mt-2 mx-2 ">프로젝트 제목</div>
            <div className="mt-2 mx-2">프로젝트 간략한 설명</div>
          </li>
        </ul>
        <div className="bg-gray-100 max-w-screen-xl mx-auto h-96 flex justify-center items-center">
          내 연락처
        </div>
      </main>
      <footer className="bg-orange-200 max-w-screen-xl mx-auto flex justify-end py-1 md:py-2">
        2023, Designed by PPisland
      </footer>
    </div>
  );
}

export default App;
