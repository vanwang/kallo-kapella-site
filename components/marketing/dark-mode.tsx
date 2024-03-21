"use client";

/* eslint-disable react/display-name */
import { Code, Button, Tooltip, Image, Chip, Card, CardFooter } from "@nextui-org/react";
import { useState } from "react";
import NextLink from "next/link";
import dynamic from "next/dynamic";

import { MusicPlayer } from "@/components/demos";
import { title, subtitle, titleWrapper, sectionWrapper } from "@/components/primitives";
import { ThemeSwitch } from "@/components/theme-switch";
import { CodeWindow } from "@/components/code-window";
import landingContent from "@/content/landing";
import { GradientBox } from "@/components";
import { InfoBoldIcon } from "@/components/icons";

const DemoCodeModal = dynamic(() => import("../demo-code-modal").then((mod) => mod.DemoCodeModal), {
  ssr: false,
});

export const DarkMode = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className={sectionWrapper({ class: "mt-16 lg:mt-44" })}>
      <div className="flex flex-col gap-8">
        <div>
          <div className={titleWrapper()}>
            <h1 className={title({ size: "lg" })}>专利技术</h1>
            <div>
              <h1 className={title({ size: "md" })}>操作如此&nbsp;</h1>
              <h1 className={title({ color: "yellow", size: "md" })}>简单</h1>
            </div>
          </div>
          <p className={subtitle()}>
            日本富士的两段式萃取技术，结合KASMOS无线控制端，让精品咖啡的出品变得高效、稳定！
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <div className="flex flex-col justify-center gap-6">
            <Card
              isFooterBlurred
            >
              <GradientBox isCentered className="pt-12 pb-16 px-6  max-h-[320px]" color="orange" to="top-right">
                <Image
                  removeWrapper
                  alt="a11y background"
                  className="h-full"
                  src="https://kalloka.oss-cn-beijing.aliyuncs.com/site/kallo-structure.svg"
                />
              </GradientBox>
              <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ">
                <p className="text-white/80">KASMOS无线控制技术</p>
              </CardFooter>
            </Card>
          </div>
          <div className="flex flex-col justify-center gap-6">
            <Card
              isFooterBlurred
            >
              <GradientBox isCentered className="pt-12 pb-16 px-6  max-h-[320px]" color="green" to="top-right">
                <Image
                  removeWrapper
                  alt="a11y background"
                  className="h-full "
                  src="https://kalloka.oss-cn-beijing.aliyuncs.com/site/kallo-brew-process.svg"
                />
              </GradientBox>
              <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-2 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10 ">
                <p className="text-white/80">日本富士专利萃取技术</p>
              </CardFooter>
            </Card>
          </div>
        </div>
        {/* <div className="flex w-1/2 justify-start">
          <Button
            aria-label="Learn more about dark mode"
            as={NextLink}
            className="max-w-fit"
            color="warning"
            href="/docs/customization/dark-mode"
            radius="full"
            size="sm"
            variant="flat"
          >
            Learn more
          </Button>
        </div> */}
      </div>

      <DemoCodeModal
        code={landingContent.darkModeExampleCode}
        isOpen={isModalOpen}
        subtitle="A simple music player component built using components from NextUI."
        title="MusicPlayer"
        onClose={() => setIsModalOpen(false)}
      />
    </section>
  );
};
