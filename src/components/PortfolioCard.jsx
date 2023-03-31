import IMG1 from "../images/f8eba5_ab89b416a2794ca4b5abf27fa2e4dc40_mv2.webp";

const PortfolioCard = () => {
  return (
    <li className="bg-white w-100  font-Ngothic mx-6">
      <div className="bg-white w-full h-[50px] font-bold text-[22px] flex justify-between items-center px-2 py-2">
        <div>프로젝트 제목</div>
        <button className="">+</button>
      </div>
      <img className="h-80 object-cover" src={IMG1} alt="img1" />
      <div className="mt-2 mx-2">프로젝트 설명</div>
    </li>
  );
};

export default PortfolioCard;
