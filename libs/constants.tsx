import { DiscordIcon, GithubIcon, TwitterIcon, XiaoHongShuIcon } from "@/components/icons";

export const TWITTER_USER_NAME = "getnextui";
export const SITE_URL = "https://nextui.org";

export const communityAccounts = [
  {
    title: "小红书",
    description: "是你的生活指南，也是我的！",
    icon: <XiaoHongShuIcon className="text-[#00ACEE]" size={32} />,
    href: "https://www.xiaohongshu.com/user/profile/6323af570000000015018c67",
    isExternal: true,
  },
  // {
  //   title: "微博",
  //   description: "To get involved in the community, ask questions and share tips.",
  //   icon: <DiscordIcon className="text-[#7289DA]" size={32} />,
  //   href: "https://discord.gg/9b6yyZKmH4",
  //   isExternal: true,
  // },
  // {
  //   title: "微信",
  //   description: "To report bugs, request features and contribute to the project.",
  //   icon: <GithubIcon className="text-[#333] dark:text-[#E7E7E7]" size={32} />,
  //   href: "https://github.com/nextui-org/nextui",
  //   isExternal: true,
  // },
];
