import generateRelativePath from "./generateRelativePath";
import classNameFromList from "./classNameFromList";

// ClassName from List
test("Class from list", () => {
	let bool = true;
	expect(classNameFromList(["c1", "c2", bool ? "c3" : ""])).toBe("c1 c2 c3");
});

// Tests Relative Paths
test("Up dir path", () => {
	expect(generateRelativePath("..", "/file/name")).toBe("/dir/");
});

test("Curr path", () => {
	expect(generateRelativePath(".", "/dir/curr")).toBe("/dir/curr");
});

test("Relative path", () => {
	expect(generateRelativePath("new", "/dir/curr")).toBe("/dir/curr/new");
});
