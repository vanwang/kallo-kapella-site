"use client";

import { Button, Link } from "@nextui-org/react";
import { ArrowRightIcon } from "@nextui-org/shared-icons";
import { clsx } from "@nextui-org/shared-utils";
import NextLink from "next/link";
import { Code } from "@nextui-org/react";

import { FeaturesGrid } from "./features-grid";

import { sectionWrapper, subtitle, title } from "@/components/primitives";
import { GithubIcon, NoteLinearIcon, NextJsIcon } from "@/components/icons";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { trackEvent } from "@/utils/va";

const bannerSuggestions = [
  {
    title: "联系地址",
    description:
      "北京市朝阳区酒仙桥路10号35号楼3层恒空间3037",
    icon: <NoteLinearIcon className="text-pink-500" />,
    href: "/contact",
  },
  /*  {
     title: "NextUI + Next.js",
     description: (
       <>
         NextUI is fully compatible with the new Next.js 13 <Code>app/</Code> directory structure.
       </>
     ),
     icon: <NextJsIcon className="text-pink-500" />,
     href: "/docs/frameworks/nextjs",
   }, */
];

export const InstallBanner = () => {
  const isMounted = useIsMounted();

  return (
    <section
      className={sectionWrapper({
        isBlurred: true,
        class:
          "border-t border-b border-divider px-8 w-screen flex justify-center items-center mt-16 lg:mt-44",
      })}
    >
      <div className=" w-full max-w-7xl py-10 grid grid-cols-12 gap-6 md:gap-0 z-20">
        <div className="flex flex-col gap-2 col-span-12 md:col-span-6">
          <div className="flex flex-col">
            <h1 className={title({ size: "md", class: "inline" })}>联系我们</h1>
          </div>
          <p className={subtitle({ class: "md:w-full text-base lg:text-lg" })}>
            联系商务代表订购KAPELLA
          </p>
          <div className="flex flex-row gap-3 justify-start">
            <Button
              as={NextLink}
              className="text-sm"
              color="secondary"
              endContent={
                <ArrowRightIcon
                  className="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform"
                  strokeWidth={2}
                />
              }
              href="/contact"
              radius="full"
              size="md"
              onClick={() => {

              }}
            >
              去订购
            </Button>
            {/* <Button
              isExternal
              as={Link}
              className="text-sm"
              href="https://github.com/nextui-org/nextui"
              radius="full"
              size="md"
              startContent={<GithubIcon />}
              variant="bordered"
              onClick={() => {
              }}
            >
              Github
            </Button> */}
          </div>
        </div>
        <div className="col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-6 ">
          <FeaturesGrid
            classNames={{
              base: "md:grid-cols-1 lg:grid-cols-1",
            }}
            features={bannerSuggestions}
          />
        </div>
      </div>
      <div
        className={clsx(
          "absolute -top-20 lg:top-10 -translate-y-1/2 w-screen h-screen -z-50 opacity-0",
          "data-[mounted=true]:opacity-100 transition-opacity",
          "bg-left bg-no-repeat bg-[url('/gradients/looper-pattern.svg')]",
          "after:content-[''] after:absolute after:top-0 after:left-0 after:w-full after:h-full after:z-[-1]",
          "after:bg-gradient-to-b after:from-transparent after:to-white/80 dark:after:to-black/20 after:z-[-1]",
        )}
        data-mounted={isMounted}
      />
    </section>
  );
};
