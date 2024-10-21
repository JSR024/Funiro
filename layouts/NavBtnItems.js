import { navItems } from "@/utils/link";
import List from "./List";
import ListItem from "./ListItem";

const NavBtnItems = () => {
  return (
    <List className={'absolute z-10 text-center bg-white right-0 w-full py-2'}>
      {navItems.map(({ name, link }) => (
        <ListItem
          key={link}
          link={link}
          listName={name}
          className={"font-medium text-pColor py-4"}
        />
      ))}
    </List>
  );
};

export default NavBtnItems;
