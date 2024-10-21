import { navItems } from "@/utils/link";
import Flex from "./Flex";
import List from "./List";
import ListItem from "./ListItem";
import { help } from "@/utils/help";

const FooterLink = () => {
  return (
    <Flex className={"justify-between"}>
      <div className="">
        <h4 className="text-pColor font-medium text-lg mb-10">Links</h4>
        <List>
          {navItems.map(({ name, link }) => (
            <ListItem
              key={link}
              link={link}
              listName={name}
              className={" text-tColor mb-5"}
            />
          ))}
        </List>
      </div>
      <div className="">
        <h4 className="text-pColor font-medium text-lg mb-10">Help</h4>
        <List>
          {help.map(({ name, link }) => (
            <ListItem
              key={link}
              link={link}
              listName={name}
              className={" text-tColor mb-5"}
            />
          ))}
        </List>
      </div>
      <div>
        <h4 className="text-pColor font-medium text-lg mb-10">Newsletter</h4>
        <Flex className={'gap-x-5'}>
          <input type="email" className="border-b-2 border-pColor outline-none text-tColor" placeholder="Enter Your Email Address"/>
          <button className="border-b-2 border-pColor font-semibold text-pColor outline-none">Subscribe</button>
        </Flex>
      </div>
    </Flex>
  );
};

export default FooterLink;
