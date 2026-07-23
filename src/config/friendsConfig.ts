import type { FriendLink, FriendsPageConfig } from "../types/friendsConfig";

// 可以在src/content/spec/friends.md中编写友链页面下方的自定义内容

// 友链页面配置
export const friendsPageConfig: FriendsPageConfig = {
	// 页面标题，如果留空则使用 i18n 中的翻译
	title: "",

	// 页面描述文本，如果留空则使用 i18n 中的翻译
	description: "这是一些有趣又优秀的网站，也许你能发现更多有意思的内容。",

	// 是否显示底部自定义内容（friends.mdx 中的内容）
	showCustomContent: true,

	// 是否显示评论区，需要先在commentConfig.ts启用评论系统
	showComment: true,

	// 是否开启随机排序配置，如果开启，就会忽略权重，构建时进行一次随机排序
	randomizeSort: false,
};

// 友链配置
export const friendsConfig: FriendLink[] = [
	{
		title: "夏夜流萤",
		imgurl:
			"https://weavatar.com/avatar/d252655d40d6874417a720bad0a6c5f77f8f6a1fd2f882f8f338402dc37e4190?s=640",
		desc: "飞萤之火自无梦的长夜亮起，绽放在终竟的明天。",
		siteurl: "https://blog.cuteleaf.cn",
		tags: ["Blog"],
		weight: 10, // 权重，数字越大排序越靠前
		enabled: true, // 是否启用
	},
	{
		title: "Firefly Docs",
		imgurl: "https://docs-firefly.cuteleaf.cn/logo.png",
		desc: "Firefly主题模板文档",
		siteurl: "https://docs-firefly.cuteleaf.cn",
		tags: ["Docs"],
		weight: 8,
		enabled: true,
	},
	{
		title: "坦白",
		imgurl: "https://pic1.imgdb.cn/item/69f83187b681ce9bfd1dcefe.jpg",
		desc: "一个躲在阴暗角落发霉的计算机大学区",
		siteurl: "https://blog.tanbai.org",
		tags: ["Blog"],
		weight: 9,
		enabled: true,
	},
	{
		title: "CWorld Site",
		imgurl:
			"https://gravatar.loli.net/avatar/1ffe42aa45a6b1444a786b1f32dfa8aa?s=640",
		desc: "求知若愚，虚怀若谷",
		siteurl: "https://cworld0.com/",
		tags: ["Blog"],
		weight: 9,
		enabled: true,
	},
	{
		title: "Arthals' ink",
		imgurl: "https://cdn.arthals.ink/Arthals.png",
		desc: "所见高山远木，阔云流风；所幸岁月盈余，了无拘束",
		siteurl: "https://arthals.ink/",
		tags: ["Blog"],
		weight: 8,
		enabled: true,
	},
	{
		title: "Astro Theme Pure",
		imgurl: "https://astro-pure.js.org/favicon/favicon.ico",
		desc: "Stay hungry, stay foolish",
		siteurl: "https://astro-pure.js.org/",
		tags: ["Theme"],
		weight: 8,
		enabled: true,
	},
];

// 获取启用的友链并进行排序
export const getEnabledFriends = (): FriendLink[] => {
	const friends = friendsConfig.filter((friend) => friend.enabled);

	if (friendsPageConfig.randomizeSort) {
		return friends.sort(() => Math.random() - 0.5);
	}

	return friends.sort((a, b) => b.weight - a.weight);
};
