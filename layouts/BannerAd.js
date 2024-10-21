import Btn from "./Btn";

const BannerAd = ({ className }) => {
  return (
      <div className={`bg-[#FFF3E3] px-10 text-center lg:text-left py-12 lg:w-[640px] ${className}`}>
        <h3 className="font-semibold text-pColor tracking-widest">New Arrival</h3>
        <h1 className="font-bold text-5xl text-sColor mt-1 mb-4 lg:w-[400px] leading-[64px]">Discover Our New Collection</h1>
        <p className="font-medium text-lg text-pColor">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</p>
        <Btn className={"uppercase text-white bg-sColor font-bold py-6 px-16 mt-11"}>
          buy now
        </Btn>
      </div>
  );
};

export default BannerAd;
