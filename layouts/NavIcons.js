import { BsPerson, BsCart3 } from "react-icons/bs";
import { RiSearchLine, RiHeartLine } from "react-icons/ri";
import Flex from "./Flex";


const NavIcons = () => {
  return (
    <Flex className="text-xl text-black justify-between items-center cursor-pointer gap-x-4 lg:gap-x-10">
        <BsPerson />
        <RiSearchLine />
        <RiHeartLine />
        <BsCart3 />
    </Flex>
  )
}

export default NavIcons