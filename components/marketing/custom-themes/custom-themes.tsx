"use client";

/* eslint-disable react/display-name */
import { useMemo, useState } from "react";
import { Tabs, Tab, Card, CardBody, Image, Button, RadioGroup, Radio } from "@nextui-org/react";
import get from "lodash/get";
import NextLink from "next/link";
import NextImage from "next/image";

import { shopCartStyles } from "./styles";

import { title, subtitle, titleWrapper, sectionWrapper } from "@/components/primitives";
import { PaletteIcon, MagicIcon, GamingConsoleIcon, StarIcon, KeyboardTwoToneIcon, CubesLinearIcon, HashLinearIcon, FlashIcon } from "@/components/icons";
import { NextUILogo, CodeWindow } from "@/components";
import landingContent from "@/content/landing";
import { useIsMobile } from "@/hooks/use-media-query";

const themesTabs = (isMobile: boolean) => [
  {
    id: "nextui",
    title: () => <p className="group-data-[selected=true]:text-primary">高端商场</p>,
    icon: () => <GamingConsoleIcon
      className="group-data-[selected=true]:text-primary"
      size={isMobile ? 34 : 44} />,
  },
  {
    id: "modern",
    title: () => <p className="group-data-[selected=true]:text-secondary">连锁门店</p>,
    icon: () => (
      <PaletteIcon
        className="group-data-[selected=true]:text-secondary"
        size={isMobile ? 34 : 44}
      />
    ),
  },
  {
    id: "elegant",
    title: () => <p className="group-data-[selected=true]:text-foreground">娱乐场所</p>,
    icon: () => <FlashIcon size={isMobile ? 34 : 44} />,
  },
  {
    id: "retro",
    title: () => <p className="group-data-[selected=true]:text-warning">大专院校</p>,
    icon: () => (
      <MagicIcon
        className="group-data-[selected=true]:text-warning"
        size={isMobile ? 34 : 44}
      />
    ),
  },
  {
    id: "activity",
    title: () => <p className="group-data-[selected=true]:text-primary">活动现场</p>,
    icon: () => (
      <HashLinearIcon
        className="group-data-[selected=true]:text-primary"
        size={isMobile ? 34 : 44}
      />
    ),
  },
  {
    id: "smarthome",
    title: () => <p className="group-data-[selected=true]:text-secondary">智能家居</p>,
    icon: () => (
      <CubesLinearIcon
        className="group-data-[selected=true]:text-secondary"
        size={isMobile ? 34 : 44}
      />
    ),
  },
];

type Theme = "nextui" | "modern" | "elegant" | "retro";
type Tab = { id: string; title: () => JSX.Element; icon: () => JSX.Element };

const itemSizes = ["xs", "s", "m", "l", "xl"];

const codeHighlights = {
  nextui: "1-25",
  modern: "26-49",
  elegant: "52-69",
  retro: "71-94",
  activity: "96-123",
  smarthome: "124-160",
};

const CustomThemesExample = ({
  tabs,
  selectedTheme,
  onChangeTheme,
}: {
  tabs: Tab[];
  selectedTheme: Theme;
  onChangeTheme: (theme: Theme) => void;
}) => {
  const [liked, setLiked] = useState(false);

  const slots = useMemo(
    () =>
      shopCartStyles({
        theme: selectedTheme as Theme,
      }),
    [selectedTheme],
  );

  const onSelectionChange = (value: React.Key) => {
    onChangeTheme(value as Theme);
  };

  return (
    <div className="flex flex-col gap-6 ">
      <Tabs
        disableAnimation
        disableCursorAnimation
        aria-label="Custom themes tabs"
        classNames={{
          base: "w-full",
          tab: "px-0 w-fit h-auto data-[selected=true]:bg-transparent",
          tabList: "w-full justify-start gap-8",
          tabContent: "text-default-400 text-base",
        }}
        items={tabs}
        variant="light"
        onSelectionChange={onSelectionChange}
      >
        {(item) => (
          <Tab
            key={item.id}
            title={
              <div className="flex flex-col justify-center items-center gap-2">
                {item.icon()}
                {item.title()}
              </div>
            }
          />
        )}
      </Tabs>
      <div className={slots.imageWrapper()}>
        <Image
          removeWrapper
          alt="KAPELLA"
          className={slots.img()}
          src="https://kalloka.oss-cn-beijing.aliyuncs.com/site/3.png"
        />
      </div>
      <Button
        aria-label="Learn more about theme customization"
        as={NextLink}
        className={slots.learnMoreButton()}
        color="primary"
        href="/docs/guide/introduction"
        radius="full"
        size="sm"
        variant="flat"
      >
        了解更多
      </Button>
    </div>
  );
};

export const CustomThemes = () => {
  const isMobile = useIsMobile();

  const tabs = themesTabs(isMobile);
  const [selectedTheme, setSelectedTheme] = useState<Theme>(tabs[0].id as Theme);

  return (
    <section className={sectionWrapper({ class: "mt-24 lg:mt-56" })}>
      <div className="flex flex-col gap-8">
        <div>
          <div className={titleWrapper()}>
            <h1 className={title({ size: "lg" })}>应用场景</h1>
            <div>
              <h1 className={title({ color: "blue", size: "md" })}>Hi&nbsp;&nbsp;KĀPELLA？&nbsp;</h1>
              <h1 className={title({ size: "md" })}>我在！</h1>
            </div>
          </div>
          <p className={subtitle()}>
            有精品咖啡需求的场景，就有KĀPELLA身影。KĀPELLA不仅可以让你轻松体验百种精品咖啡，也是你的专属冠军咖啡师，根据你的喜好推荐咖啡产品！
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <CustomThemesExample
            selectedTheme={selectedTheme}
            tabs={tabs}
            onChangeTheme={setSelectedTheme}
          />
          <CodeWindow
            showWindowIcons
            className="max-h-[440px] min-h-[390px] text-wrap"
            highlightLines={get(codeHighlights, selectedTheme)}
            isScrollable={false}
            language="bash"
            title="AI场景描述"
            value={landingContent.themingCode}
          />
        </div>
      </div>
      <div className="h-full dark:md:block absolute hidden -bottom-[10%] -left-[15%] -z-[1]">
        <Image
          removeWrapper
          alt="custom themes background"
          className="h-full"
          src="/gradients/blue-purple-1.svg"
        />
      </div>
    </section>
  );
};
