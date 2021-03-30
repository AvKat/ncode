const generatePath = (
  name: string,
  pathname: string,
  isFile: boolean = false
) => {
  return isFile
    ? `${pathname}/${name}`.replace("dir", "file")
    : `${pathname}/${name}`;
};

export default generatePath;
