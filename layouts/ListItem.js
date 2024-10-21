import Link from "next/link";

const ListItem = ({ className, listName, link }) => {
  return <li className={`cursor-pointer ${className}`}><Link href={link}>{listName}</Link></li>;
};

export default ListItem;
