import { Button, Link, Image } from "@nextui-org/react";
import NextImage from "next/image";

import { sectionWrapper } from "@/components/primitives";
import { FujiBingShanLogo, FujiLogo, RelumeLogo, Story2DesignLogo } from "@/components/icons/sponsors";
import { HeartFilledIcon } from "@/components/icons";
import { VercelIcon } from "@/components/icons/social";
import { siteConfig } from "@/config/site";
import { Sponsor, SponsorItem } from "@/components/marketing/sponsor-item";

const sponsors: Sponsor[] = [
  {
    name: "富士电机",
    href: "https://www.fujielectric.com.cn/",
    logo: <FujiLogo className="text-black dark:text-white" />,
  },
  {
    name: "富士冰山",
    href: "http://www.fujibingshan.com.cn/",
    logo: <FujiBingShanLogo className="text-black dark:text-white" />,
  },
  // {
  //   name: "Relume",
  //   href: "https://library.relume.io/ai-site-builder?via=nextui",
  //   logo: <RelumeLogo className="text-black dark:text-white" />,
  // },
  // {
  //   name: "story.to.design",
  //   href: "https://story.to.design?utm_source=nextui&utm_marketing=partnership",
  //   logo: <Story2DesignLogo className="pt-1" />,
  // },
  // {
  //   name: "Vercel",
  //   href: "https://www.vercel.com?utm_source=nextui&utm_marketing=oss",
  //   logo: <VercelIcon className="text-black dark:text-white" height={24} />,
  // },
];

export const Sponsors = () => {
  return (
    <section className={sectionWrapper({ class: "text-center mt-24 lg:mt-32" })}>
      <h3 className="text-large text-default-500">合作伙伴</h3>
      <div className="w-full flex flex-wrap gap-x-10 gap-y-3 justify-center items-center">
        {sponsors.map((sponsor) => (
          <SponsorItem key={sponsor.name} {...sponsor} />
        ))}
        {/* <Button
          isExternal
          as={Link}
          className="group text-sm border-dashed font-normal text-default-600 data-[hover=true]:bg-default-100/50"
          href={siteConfig.links.sponsor}
          startContent={
            <HeartFilledIcon className="text-danger group-data-[hover=true]:animate-heartbeat" />
          }
          variant="bordered"
        >
          Your Company
        </Button> */}
      </div>
    </section>
  );
};
