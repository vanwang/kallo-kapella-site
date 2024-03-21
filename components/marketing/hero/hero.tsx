"use client";

import NextLink from "next/link";
import { Button, Chip, Link, Image } from "@nextui-org/react";
import NextImage from "next/image";
import { ArrowRightIcon } from "@nextui-org/shared-icons";
import dynamic from "next/dynamic";

import { FloatingComponents } from "./floating-components";

import { title, subtitle } from "@/components/primitives";
import { EyeBoldIcon, GithubIcon } from "@/components/icons";
import { trackEvent } from "@/utils/va";
import { useRef } from "react";

const BgLooper = dynamic(() => import("./bg-looper").then((mod) => mod.BgLooper), {
  ssr: false,
});

export const Hero = () => {
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  const handleConfetti = async () => {
    const { clientWidth, clientHeight } = document.documentElement;
    const boundingBox = buttonRef.current?.getBoundingClientRect?.();

    const targetY = boundingBox?.y ?? 0;
    const targetX = boundingBox?.x ?? 0;
    const targetWidth = boundingBox?.width ?? 0;

    const targetCenterX = targetX + targetWidth / 2;
    const confetti = (await import("canvas-confetti")).default;

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 70,
      origin: {
        y: targetY / clientHeight,
        x: targetCenterX / clientWidth,
      },
    });

  };
  // const handlePressAnnouncement = (name: string, url: string) => {
  //   trackEvent("NavbarItem", {
  //     name,
  //     action: "press",
  //     category: "home - gero",
  //     data: url,
  //   });
  // };

  return (
    <section className="flex relative overflow-hidden lg:overflow-visible w-full flex-nowrap justify-between items-center h-[calc(100vh_-_64px)] md:h-[calc(90vh_-_64px)] xl:h-[calc(70vh_-_64px)]">
      <div className="flex relative z-20 flex-col gap-6 w-full lg:w-1/2 xl:mt-10">
        <div className="w-full flex justify-center md:hidden">
          <img
            alt="Kapella Pro"
            height={400}
            // src="/images/hero-card.webp"
            src="/kallo/2.png"
            width={280}
            className="max-w-fit mb-10"
          />
        </div>
        {/* <div className="w-full flex justify-center md:hidden">
          <Chip
            as={NextLink}
            className="w-full hover:bg-default-100 border-default-200/80 dark:border-default-100/80 transition-colors cursor-pointer"
            color="secondary"
            href="/blog/v2.2.0"
            variant="dot"
          onClick={() => handlePressAnnouncement("Introducing v2.2.0", "/blog/v2.2.0")}
          >
            Introducing v2.2.0&nbsp;
            <span aria-label="rocket emoji" role="img">
              🚀
            </span>
          </Chip>
        </div> */}
        <h1 className={title({ color: "blue", size: "xl" })}>KAPELLA PRO&nbsp;</h1>
        <div className="text-center leading-8 md:leading-10 md:text-left">
          <div className="inline-block">
            <h1 className={title()}>更快&nbsp;</h1>
            <h1 className={title()}>更稳&nbsp;</h1>
            <h1 className={title({ color: "violet" })}>更美味&nbsp;</h1>
          </div>
          {/* <h1 className={title()}>KAPELLA PRO</h1> */}
        </div>
        <h2 className={subtitle({ fullWidth: true, class: "text-center md:text-left" })}>
          GREAT TASTES MADE SIMPLE!
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-4">
          <Button
            as={NextLink}
            className="w-full md:w-auto"
            color="primary"
            endContent={
              <ArrowRightIcon
                className="group-data-[hover=true]:translate-x-0.5 outline-none transition-transform"
                strokeWidth={2}
              />
            }
            href="/contact"
            radius="full"
            size="lg"
            ref={buttonRef}
            onClick={handleConfetti}
          >
            去订购
          </Button>

          <Button
            fullWidth
            as={Link}
            className="w-full md:w-auto"
            href="/docs/guide/introduction"
            radius="full"
            size="lg"
            startContent={<EyeBoldIcon />}
            variant="bordered"
          >
            进一步了解
          </Button>
        </div>
      </div>

      <FloatingComponents />

      <BgLooper />
    </section>
  );
};
