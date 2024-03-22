export type SiteConfig = typeof siteConfig;

export const siteConfig = {
	name: "KĀPELLA - 全自动精品咖啡冲煮方案",
	description: "全自动精品咖啡冲煮方案。",
	ogImage: "https://nextui.org/twitter-cards/nextui.jpeg",
	author: "Junior Garcia",
	email: "jrgarciadev@gmail.com",
	siteUrl: "https://nextui.org",
	creator: "@getnextui",
	openGraph: {
		type: "website",
		locale: "zh",
		url: "https://kalloka.com",
		siteName: "KAPELLA",
		description: "全自动精品咖啡冲煮方案",
		images: [
			{
				url: "https://nextui.org/twitter-cards/nextui.jpeg",
				width: 1200,
				height: 630,
				alt: "NextUI",
			},
		],
	},
	links: {
		docs: "https://nextui-docs-v2.vercel.app",
	},
};
