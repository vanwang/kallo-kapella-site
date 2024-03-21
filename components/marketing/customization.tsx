"use client";

/* eslint-disable react/display-name */
import { Button, Link, Image } from "@nextui-org/react";
import NextLink from "next/link";

import { title, subtitle, titleWrapper, sectionWrapper } from "@/components/primitives";
import { CodeWindow } from "@/components/code-window";
import landingContent from "@/content/landing";
import { GradientBox } from "@/components/gradient-box";
import { CustomButton } from "@/components/demos";

export const Customization = () => {
  return (
    <section className={sectionWrapper({ class: "mt-16 lg:mt-44" })}>
      <div className="flex flex-col gap-8">
        <div>
          <div className={titleWrapper({ class: "items-center" })}>
            <div>
              <h1 className={title({ size: "lg" })}>私人&nbsp;</h1>
              <h1 className={title({ color: "yellow", size: "lg" })}>定制</h1>
            </div>
            <div>
              <h1 className={title({ size: "lg" })}>更加&nbsp;</h1>
              <h1 className={title({ size: "lg", color: "pink" })}>合拍</h1>
            </div>
          </div>
          <p
            className={subtitle({
              class: "mt-4 md:w-full text-center flex justify-center items-center",
            })}
          >
            模块化的设计，支持定制多彩外观。
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <div className="flex justify-center gap-6">
            <GradientBox
              isCentered
              className="py-0 px-0 md:px-10 md:py-8 w-2/3"
              to="top-right"
            >
              <Image
                alt="a11y background"
                src="https://kalloka.oss-cn-beijing.aliyuncs.com/site/colorful.svg"
              />
              {/* <CustomButton /> */}
            </GradientBox>
          </div>
        </div>
        {/* <div className="flex w-1/2 justify-start">
          <Button
            aria-label="Learn more about customization"
            as={NextLink}
            className="max-w-fit bg-pink-100 text-pink-500 dark:bg-pink-900 dark:text-pink-300"
            href="/docs/customization/customize-theme"
            radius="full"
            size="sm"
            variant="flat"
          >
            Learn more
          </Button>
        </div> */}
      </div>
    </section>
  );
};
