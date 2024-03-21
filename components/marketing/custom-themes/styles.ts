import { tv, VariantProps } from "tailwind-variants";

export const shopCartStyles = tv({
  slots: {
    wrapper: "overflow-visible h-auto lg:h-[240px] dark:border-transparent",
    imageWrapper: [
      "flex",
      "justify-center",
      "w-full",
      "h-48",
      "py-3",
      "mt-10",
      "mb-6",
      "sm:mb-0",
      "relative",
      "z-10",
      "before:absolute",
      "before:top-0",
      "before:left-0",
      "before:w-full",
      "before:h-full",
      "before:bg-gradient-to-br",
      "transition-all",
      "!ease-soft-spring",
      "!duration-500",
      "will-change-auto",
      "before:transition-all",
    ],
    img: [
      "z-10",
      "top-2",
      "sm:left-2",
      "inset-0",
      "h-full",
      "object-cover",
      "rounded-lg",
      "transition-all",
      "will-change-auto",
      "!ease-soft-spring",
      "!duration-300",
    ],
    contentWrapper: "flex flex-col justify-center transition-all h-full h-[200px]",
    title: ["relative", "w-full", "flex-none", "text-xl", "font-semibold", "text-foreground"],
    description: ["my-2", "w-full", "text-base", "text-default-500"],
    price: "relative text-lg font-semibold text-foreground",
    previousPrice: "relative line-through font-semibold text-default-400 ml-3",
    percentOff: "relative font-normal text-success ml-3",
    sizeOption: [
      "w-8",
      "h-8",
      "flex",
      "m-0",
      "justify-center",
      "items-center",
      "text-sm",
      "rounded-full",
      // focus ring
      "group-data-[focus-visible=true]:outline-none",
      "group-data-[focus-visible=true]:ring-2",
      "group-data-[focus-visible=true]:ring-focus",
      "group-data-[focus-visible=true]:ring-offset-2",
      "group-data-[focus-visible=true]:ring-offset-background",
    ],
    sizeOptionLabel: "text-sm font-semibold text-inherit",
    buyButton: ["text-sm", "font-normal"],
    addToBagButton: ["text-sm", "font-normal"],
    starButton: "absolute top-3 right-3 text-default-400 data-[liked=true]:text-warning",
    learnMoreButton: "max-w-fit",
  },
  variants: {
    theme: {
      nextui: {
        imageWrapper: ["before:rounded-2xl", "before:from-[#010187] before:to-[#18000E]"],
        img: "scale-150",
        sizeOption: [
          "group-data-[selected=true]:bg-primary",
          "group-data-[selected=true]:text-primary-foreground",
        ],
        learnMoreButton: "bg-primary/20 text-primary",
      },
      modern: {
        imageWrapper: [
          "before:rounded-2xl",
          "before:from-[#870172] before:to-[#18000E]",
        ],
        img: "scale-150",
        learnMoreButton: "bg-secondary/20 text-secondary",
      },
      elegant: {
        wrapper: "rounded-sm",
        imageWrapper: [
          "before:rounded-sm",
          "before:from-[#323232] before:to-[#000000]",
          "shadow-xl",
        ],
        img: "scale-150",
        description: "text-sm font-mono font-light",
        learnMoreButton: "bg-foreground/10 text-foreground",
      },
      retro: {
        wrapper: "bg-[#F4E8D1] dark:bg-[#E1CA9E] rounded-sm",
        // contentWrapper: "ml-3",
        imageWrapper: [
          "before:rounded-none",
          "before:from-[#FFD34E] before:to-[#EE457E]",
          "before:shadow-md",
          "after:-z-10",
          "after:absolute",
          "after:top-2",
          "after:left-2",
          "after:w-full",
          "after:h-full",
          "after:bg-[#FFD34E]",
        ],
        img: "scale-150",
        title: "text-xl uppercase text-black",
        learnMoreButton: "bg-warning/20 text-warning",
      },
      activity: {
        imageWrapper: ["before:rounded-2xl", "before:from-[#010187] before:to-[#18000E]"],
        img: "scale-150",
        learnMoreButton: "bg-primary/20 text-primary",
      },
      smarthome: {
        imageWrapper: [
          "before:rounded-2xl",
          "before:from-[#870172] before:to-[#18000E]",
        ],
        img: "scale-150",
        learnMoreButton: "bg-secondary/20 text-secondary",
      },
    },
  },
  defaultVariants: {
    theme: "nextui",
  },
});

export type ShopCartProps = VariantProps<typeof shopCartStyles>;
