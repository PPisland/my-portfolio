import IMG1 from "../images/Calendar.PNG";

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
    <li className="inline-block bg-white shadow-md font-Ngothic border-4 hover:border-purple-400 ">
      <div className=" font-bold text-[22px] flex justify-between">
        {props.title}
        <button>+</button>
      </div>

      <div>
        <img
          className="h-[320px] object-cover "
          src={props.img}
          alt={props.img}
        />{" "}
        {/* <img className=" object-cover" src={IMG1} alt="1" /> */}
        {/* <ul>
          {props.img.map((v, i) => {
            return <img src={v} alt={v} />;
          })}
        </ul> */}
      </div>
      <div>
        <ul className=" p-2 text-[18px] min-h-[160px]">
          {props.script.map((v, i) => {
            return <li className="truncate">{v}</li>;
          })}
        </ul>
      </div>
    </li>
  );
}

export default PortfolioCard;
