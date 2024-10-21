import Image from "next/image";
import Container from "./Container";
import Flex from "./Flex";
import sev1 from "../images/trophy .png";
import sev2 from "../images/guarantee.png";
import sev3 from "../images/shipping.png";
import sev4 from "../images/customer-support.png";

const Service = () => {
  return (
    <div className="bg-[#FAF3EA] py-[100px]">
      <Container>
        <Flex className={'items-center gap-5 sm:justify-center xl:justify-between xl:gap-0'}>
          <Flex className={"items-center gap-x-1"}>
            <div>
              <Image src={sev1} alt="sev" />
            </div>
            <div>
              <h4 className="font-semibold text-2xl text-pColor">High Quality</h4>
              <p className="font-medium text-xl text-tColor capitalize">crafted from top materials</p>
            </div>
          </Flex>
          <Flex className={"items-center gap-x-1"}>
            <div>
              <Image src={sev2} alt="sev" />
            </div>
            <div>
              <h4 className="font-semibold text-2xl text-pColor">Warranty Protection</h4>
              <p className="font-medium text-xl text-tColor capitalize">Over 2 years</p>
            </div>
          </Flex>
          <Flex className={"items-center gap-x-1"}>
            <div>
              <Image src={sev3} alt="sev" />
            </div>
            <div>
              <h4 className="font-semibold text-2xl text-pColor">Free Shipping</h4>
              <p className="font-medium text-xl text-tColor capitalize">Over 2 years</p>
            </div>
          </Flex>
          <Flex className={"items-center gap-x-1"}>
            <div>
              <Image src={sev4} alt="sev" />
            </div>
            <div>
              <h4 className="font-semibold text-2xl text-pColor">24 / 7 Support</h4>
              <p className="font-medium text-xl text-tColor capitalize">Dedicated support</p>
            </div>
          </Flex>
        </Flex>
      </Container>
    </div>
  );
};

export default Service;
