import { aboutPageDetails } from "../constants";
import { SideBannerOne } from "../assets/images";

const About = () => {
  return (
    <main className="mt-[80px] mb-10 px-[5%] md:px-[10%]">
      <h1 className="text-4xl text-center mt-10 text-slate-gray font-montserrat font-bold pt-5">
        About Fashionary
      </h1>

      <div className="flex flex-col-reverse xl:flex-row gap-9">
        <div className="flex flex-col xl:w-1/2 p-5">
          {aboutPageDetails.map((detail, index) => (
            <div key={index} className="mt-10">
              <h2 className="text-2xl text-center mt-4 text-slate-gray font-montserrat font-bold">
                {detail.heder}
              </h2>
              <p className="mt-4 text-slate-gray font-montserrat font-normal text-xl leading-normal">
                {detail.description}
              </p>
            </div>
          ))}
        </div>
        <div className="xl:w-1/2 justify-center items-center xl:ml-[5%] p-5">
          <img
            src={SideBannerOne}
            alt="banner"
            className="w-full h-auto mt-10 rounded-lg object-contain"
          />
        </div>
      </div>
    </main>
  );
};

export default About;
