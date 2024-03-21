"use client";

/* eslint-disable react/display-name */
import {
  Button,
  Image,
  Link as NextUILink,
  Dropdown,
  DropdownSection,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Tooltip,
} from "@nextui-org/react";
import { useInView } from "framer-motion";
import { clsx } from "@nextui-org/shared-utils";
import {
  AddNoteBulkIcon,
  CopyDocumentBulkIcon,
  EditDocumentBulkIcon,
  DeleteDocumentBulkIcon,
} from "@nextui-org/shared-icons";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import { FeaturesGrid } from "./features-grid";

import landingContent from "@/content/landing";
import { GradientBox } from "@/components";
import {
  KeyboardBoldIcon,
  MouseCircleBoldIcon,
  SquaresBoldIcon,
  FatrowsBoldIcon,
  EyeBoldIcon,
  KeyboardOpenBoldIcon,
  InfoBoldIcon,
  MoreSquareBoldIcon,
} from "@/components/icons";
import { title, subtitle, titleWrapper, sectionWrapper } from "@/components/primitives";
import { useIsMobile } from "@/hooks/use-media-query";
import { VideoInView } from "../blog/components";

const DemoCodeModal = dynamic(() => import("../demo-code-modal").then((mod) => mod.DemoCodeModal), {
  ssr: false,
});

const a11yItems = [
  {
    title: "交互零距离",
    icon: <KeyboardBoldIcon />,
  },
  {
    title: "高品质稳定出品",
    icon: <MouseCircleBoldIcon />,
  },
  {
    title: "出品卫生安全",
    icon: <SquaresBoldIcon />,
  },
  {
    title: "智能互联系统",
    icon: <FatrowsBoldIcon />,
  },
  {
    title: "客制化配方产品",
    icon: <EyeBoldIcon />,
  },
  {
    title: "熟豆供应链共享",
    icon: <KeyboardOpenBoldIcon />,
  },
  {
    title: "使用场景灵活",
    icon: <MoreSquareBoldIcon />,
  },
];

const iconClasses = "text-2xl text-default-500 pointer-events-none flex-shrink-0";

export const A11yOtb = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const ref = useRef<any>(null);

  const isMobile = useIsMobile();

  const isInView = useInView(ref, {
    margin: isMobile ? "0px" : "-300px",
  });

  useEffect(() => {
    setIsDropdownOpen(!isMobile && isInView);
  }, [isMobile, isInView]);

  return (
    <section className={sectionWrapper({ class: "z-20 mt-16 lg:mt-44" })}>
      <div className="flex flex-col gap-8">
        <div>
          <div className={titleWrapper()}>
            <h1 className={title({ size: "lg" })}>设备特点</h1>
            <div>
              <h1 className={title({ color: "green", size: "md" })}>惊喜&nbsp;</h1>
              <h1 className={title({ size: "md" })}>源源不断</h1>
            </div>
          </div>
          <p className={subtitle()}>
            我们与世界一流的的设备设计与制造商&nbsp;
            <NextUILink
              isExternal
              className="text-xl text-default-500 font-light [&>svg]:ml-1"
              href="https://www.fujielectric.com.cn/"
              underline="always"
            >
              富士电机
            </NextUILink>
            、&nbsp;
            <NextUILink
              isExternal
              className="text-xl text-default-500 font-light [&>svg]:ml-1"
              href="http://www.fujibingshan.com.cn/"
              underline="always"
            >
              富士冰山
            </NextUILink>
            &nbsp; 一起，打造了领先的全自动精品咖啡冲煮方案！匠心独居的精心打磨，给视觉和味蕾带来的惊喜源源不断！
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col gap-6">
            <FeaturesGrid
              classNames={{
                base: "grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4",
                header: "pb-3",
                card: "bg-white dark:bg-default-400/10",
                iconWrapper: "bg-default-100 dark:bg-transparent text-default-500/50",
              }}
              features={a11yItems}
            />
            {/* <Button
              aria-label="Learn more about accessibility"
              as={Link}
              className="max-w-fit"
              color="success"
              href="/docs/customization/customize-theme"
              radius="full"
              size="sm"
              variant="flat"
            >
              Learn more
            </Button> */}
          </div>
          <GradientBox
            ref={ref}
            className="h-full min-h-[200px] lg:min-h-[343px] max-h-[390px] items-center lg:items-start justify-center overflow-hidden"
            // color="green"
            to="right"
          >
            <VideoInView
              src="https://kalloka.oss-cn-beijing.aliyuncs.com/site/kapella-video.mp4"
              // poster="https://d2u8k2ocievbld.cloudfront.net/new-docs-poster.png"
              poster="https://kalloka.oss-cn-beijing.aliyuncs.com/site/video-bg.jpg"
              width={700}
              height={350}
            />
          </GradientBox>
        </div>
      </div>
      <div className="absolute hidden dark:md:block h-full dark:opacity-70 -bottom-[10%] left-[20%] z-[-10]">
        <Image
          removeWrapper
          alt="a11y background"
          className="h-full z-[-10]"
          src="/gradients/green.svg"
        />
      </div>

      <DemoCodeModal
        code={landingContent.a11yExampleCode}
        isOpen={isModalOpen}
        title="Dropdown"
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
