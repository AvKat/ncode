import type { JSONResponseListItem } from "../../types";
import generateRelativePath from "../../utils/generateRelativePath";
import ListItem from "../ListItem";

const generateItem = (item: JSONResponseListItem, pathname: string) => {
  let i = 0;
  return (
    <ListItem
      key={`${item.name}-${i++}`}
      type={item.dir ? "dir" : "file"}
      to={generateRelativePath(item.name, pathname, !item.dir)}
    >
      {item.name}
    </ListItem>
  );
};

export default generateItem;
