import { Link } from "react-router-dom";

// const PortfolioCard = () => {
//   return (
//     <li className="bg-white w-100  font-Ngothic mx-6">
//       <div className="bg-white w-full h-[50px] font-bold text-[22px] flex justify-between items-center px-2 py-2">
//         <div>프로젝트 제목</div>
//         <button className="">+</button>
//       </div>
//       <img className="h-80 object-cover" src={IMG1} alt="img1" />
//       <div className="mt-2 mx-2">프로젝트 설명</div>
//     </li>
//   );
// };
function PortfolioCard(props) {
  return (
    <li className="inline-block w-[395px] bg-white shadow-md font-Ngothic border-[2px] hover:border-purple-400 ">
      <div className=" font-bold text-[22px] flex justify-between px-3 ">
        {props.title}
        <Link
          to={`/a/${props.index}?title=${props.title}&img=${props.img}&script=${props.script}&script2=${props.script2}`}
        >
          <button>+</button>
        </Link>
      </div>
      <div>
        <img
          className="w-full h-[320px] object-cover border-y-2"
          src={`${process.env.PUBLIC_URL}/${props.img}`}
          alt="project"
        />{" "}
      </div>
      <div className="p-2 font-semibold text-[15px] min-h-[20px]">
        {props.script}
      </div>
      <div className="p-2 font-base text-[14px] min-h-[140px]">
        {props.script2}
      </div>
    </li>
  );
}

export default PortfolioCard;
