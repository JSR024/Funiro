import Image from "next/image";
import banner from "../images/Banner.png";
import BannerAd from "@/layouts/BannerAd";
import Container from "@/layouts/Container";

const Banner = () => {
  return (
    <div className="relative">
      <div className="hidden lg:block">
        <Image src={banner} alt="banner" sizes="100vw" style={{width: '100%', height: 'auto'}}/>
      </div>
      <Container>
        <BannerAd className={"lg:absolute lg:z-10 lg:top-[10%] 2xl:top-[25%] lg:right-4 2xl:right-[270px]"} />
      </Container>
    </div>
  );
};

export default Banner;
