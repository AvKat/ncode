import type { JSONResponseListItem } from "../../types";
import generatePath from "../../utils/generatePath";
import ListItem from "../ListItem";

const generateItem = (
  item: JSONResponseListItem,
  isFile: boolean,
  pathname: string
) => {
  let i = 0;
  return (
    <ListItem
      key={`${item.name}-${i++}`}
      type={isFile ? "file" : "dir"}
      to={generatePath(item.name, pathname, isFile)}
    >
      {item.name}
    </ListItem>
  );
};

export default generateItem;
