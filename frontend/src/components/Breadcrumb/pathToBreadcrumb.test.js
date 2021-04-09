import pathToBreadcrumb from "./pathToBreadCrumb";

test("Check function", () => {
	expect(pathToBreadcrumb("/dir/misc/file")).toStrictEqual([
		{ name: "misc", url: "/dir/misc" },
		{ name: "file", url: "/dir/misc/file" },
	]);
});
