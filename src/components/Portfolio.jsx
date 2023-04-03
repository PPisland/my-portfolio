import PortfolioCard from "./PortfolioCard";
import scriptData from "../scriptData.json";
const Portfolio = () => {
  return (
    // <ul className="bg-[#f6f6f6] max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center py-8 ">
    //   {/* object-cover */}

    // </ul>
    <div className="bg-[#f6f6f6] max-w-screen-2xl mx-auto p-8">
      <ul className="grid grid-cols-3 gap-6">
        {scriptData.map((v, i) => {
          return (
            <PortfolioCard
              key={i}
              title={v.title}
              img={v.img}
              script={v.script}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default Portfolio;
