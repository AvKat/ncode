import path from "path";

const generatePath = (option: string) => {
  return path.join(process.cwd(), option);
};

export { generatePath };
