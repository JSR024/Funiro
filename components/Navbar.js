"use client";

import Container from "@/layouts/Container";
import Image from "next/image";
import Navlogo from "../images/NavIcon.png";
import Flex from "@/layouts/Flex";
import NavItems from "@/layouts/NavItems";
import NavIcons from "@/layouts/NavIcons";
import { HiMenuAlt3 } from "react-icons/hi";
import { useEffect, useRef, useState } from "react";
import NavBtnItems from "@/layouts/NavBtnItems";

const Navbar = () => {
  const [navBtn, setNavBtn] = useState(false);
  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setNavBtn(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);
  return (
    <Container className={"py-4"}>
      <Flex className={"items-center justify-between"}>
        <div className="w-[35%] lg:w-[30%] xl:w-[50%]">
          <Image src={Navlogo} alt="Icon" />
        </div>
        <Flex className={'items-center gap-x-4 lg:justify-between lg:w-[65%] xl:w-[45%]'}>
          <div className="lg:w-[30%] order-1 lg:order-none">
            <div
              ref={menuRef}
              onClick={() => setNavBtn(!navBtn)}
              className=" cursor-pointer lg:hidden"
            >
              <HiMenuAlt3 className=" text-xl text-pColor" />
              {navBtn ? close : open}
              {navBtn && <NavBtnItems />}
            </div>
            <NavItems />
          </div>
          <Flex className=" lg:w-[35%]">
            <NavIcons />
          </Flex>
        </Flex>
      </Flex>
    </Container>
  );
};

export default Navbar;
