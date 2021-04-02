const generateRelativePath = (
  name: string,
  pathname: string,
  isDestFile: boolean = false
) => {
  let currLocation = pathname.split("/").slice(2);
  let destType: string, destLocation: string;
  switch (name) {
    case "..":
      destType = "dir";
      destLocation = currLocation.slice(0, -1).join("/");
      break;
    case ".":
      destType = isDestFile ? "file" : "dir";
      destLocation = currLocation.join("/");
      break;

    default:
      destType = isDestFile ? "file" : "dir";
      destLocation = [...currLocation, name].join("/");
      break;
  }
  return `/${destType}/${destLocation}`;
};

export default generateRelativePath;
