import PortfolioCard from "./PortfolioCard";

const Portfolio = () => {
  return (
    <ul className="bg-[#f6f6f6] max-w-screen-2xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 justify-items-center py-8 ">
      {/* object-cover */}
      <PortfolioCard></PortfolioCard>
      <PortfolioCard></PortfolioCard>
      <PortfolioCard></PortfolioCard>
      <PortfolioCard></PortfolioCard>
      <PortfolioCard></PortfolioCard>
      <PortfolioCard></PortfolioCard>
    </ul>
  );
};

export default Portfolio;
