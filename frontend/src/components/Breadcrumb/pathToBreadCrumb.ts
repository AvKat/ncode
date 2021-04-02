import { BreadcrumbPartType } from ".";

const pathToBreadcrumb = (pathname: string) => {
	const parts = pathname.split("/").slice(2);
	let res: BreadcrumbPartType[] = [];
	let temp: BreadcrumbPartType | null = null;
	let url = "/dir";

	parts.forEach((part) => {
		url += `/${part}`;
		temp = {
			name: part,
			url,
		};
		res.push(temp);
	});
	return res;
};

export default pathToBreadcrumb;
