import { HomeBanner, MobileBanner } from "../assets/images";


const Hero = () => {
  return (
    <section>
      {/* Mobile Banner */}

      <div className="block md:hidden">
      <img
          src={MobileBanner}
          alt="HomeBanner"
          height={80}
          className="w-full object-contain mb-5"
        />
      </div>

      {/* DeskTop Banner */}

      <div className="hidden md:block">
        <img
          src={HomeBanner}
          alt="HomeBanner"
          height={80}
          className="w-full object-contain mb-5"
        />
      </div>
    </section>
  );
};

export default Hero;
