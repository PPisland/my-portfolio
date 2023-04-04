import { useSearchParams } from "react-router-dom";

function Project() {
  const [searchParams] = useSearchParams();

  const title = searchParams.get("title");
  const script = searchParams.get("script");
  const image = searchParams.get("img");

  return (
    <div className="bg-white max-w-screen-2xl mx-auto w-full grow flex flex-col justify-center items-center py-8">
      <div className="">
        {/* 827x532 */}
        <img src={`${process.env.PUBLIC_URL}/${image}`} alt="project" />
      </div>
      <div>{title}</div>
      <div>{script}</div>
    </div>
  );
}

export default Project;
