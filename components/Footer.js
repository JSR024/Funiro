import Container from "@/layouts/Container";
import Flex from "@/layouts/Flex";
import Service from "@/layouts/Service";
import Image from "next/image";
import footImg from "../images/FooterIcon.png";
import FooterLink from "@/layouts/FooterLink";
import Trademark from "@/layouts/Trademark";

const Footer = () => {
  return (
    <>
      <Service />
      <Container>
        <div className="border-b-2 border-b-sColor py-12">
          <Flex className={"items-center gap-y-5 justify-between"}>
            <div className="w-1/3">
              <div>
                <Image src={footImg} alt="footerImg" />
              </div>
              <address className="text-tColor mt-10">
                400 University Drive Suite 200 Coral Gables,
                <br />
                FL 33134 USA
              </address>
            </div>
            <div className="w-2/3">
              <FooterLink />
            </div>
          </Flex>
        </div>
        <Trademark/>
      </Container>
    </>
  );
};

export default Footer;
