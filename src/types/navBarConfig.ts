export type NavBarLink = {
	name: string;
	url: string;
	external?: boolean;
	title?: string; // 菜单项提示文本
	icon?: string; // 菜单项图标
	children?: NavBarLink[]; // 支持子菜单
	pageKey?: string;
};

export enum NavBarSearchMethod {
	PageFind = 0,
}

export type NavBarSearchConfig = {
	method: NavBarSearchMethod;
};

export type NavBarConfig = {
	links: NavBarLink[];
};
