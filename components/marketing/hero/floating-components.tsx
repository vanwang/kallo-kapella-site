import {
  Button,
  Tooltip,
  Input,
  Image,
  Card,
  CardBody,
  CardFooter,
  Switch,
  Spinner,
  Pagination,
} from "@nextui-org/react";
import { MoonFilledIcon, SunFilledIcon } from "@nextui-org/shared-icons";
import { useTheme } from "next-themes";
import NextImage from "next/image";

import { FloatingTabs } from "./floating-tabs";

import { UserTwitterCard } from "@/components/demos/user-twitter-card";
import { useIsMounted } from "@/hooks/use-is-mounted";
import { useMediaQuery } from "@/hooks/use-media-query";
import { NextUILogo } from "@/components/nextui-logo";

export const FloatingComponents: React.FC<{}> = () => {
  const { theme, setTheme } = useTheme();

  const isMounted = useIsMounted();
  const isSelected = theme === "dark" && isMounted;

  const isTablet = useMediaQuery(1024);

  const onChange = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="hidden md:flex flex-col relative z-20 w-1/2">
      <>
        {/* <UserTwitterCard className="absolute left-[80px] -top-[80px] animate-[levitate_16s_ease_infinite] border-none" /> */}
        <img
          alt="kapella"
          height={800}
          // src="/images/hero-card.webp"
          src="https://kalloka.oss-cn-beijing.aliyuncs.com/site/2.png"
          width={450}
          className="absolute -right-[50px] -top-[200px] z-0 max-w-fit"
        />
      </>
    </div>
  );
};
