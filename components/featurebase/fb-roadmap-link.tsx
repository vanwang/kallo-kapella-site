"use client";

import NextLink from "next/link";
import arrowRightUpIcon from "@iconify/icons-solar/arrow-right-up-linear";
import { Icon } from "@iconify/react/dist/offline";
import { clsx } from "@nextui-org/shared-utils";

import { trackEvent } from "@/utils/va";

type Props = {
  className?: string;
  innerClassName?: string;
};

export const FbRoadmapLink = ({ className, innerClassName }: Props) => {

  return (
    <NextLink
      className={clsx("inline-flex items-center", className)}
      color="foreground"
      href="https://business.kalloka.com"
      target="_blank"
    >
      <div className={clsx("relative", innerClassName)}>
        客户登录
        <Icon
          className="absolute right-[-10px] top-0 outline-none transition-transform group-data-[hover=true]:translate-y-0.5 [&>path]:stroke-[2.5px]"
          icon={arrowRightUpIcon}
          width={10}
        />
      </div>
    </NextLink>
  );
};
