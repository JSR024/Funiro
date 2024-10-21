import { navItems } from "@/utils/link";
import List from "./List";
import ListItem from "./ListItem";

const NavItems = () => {
  return (
    <List className={"lg:flex items-center gap-x-14 hidden"}>
      {navItems.map(({ name, link }) => (
        <ListItem
          key={link}
          link={link}
          listName={name}
          className={"font-medium text-pColor"}
        />
      ))}
    </List>
  );
};

export default NavItems;
