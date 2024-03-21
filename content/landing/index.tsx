import React from "react";
import { Code } from "@nextui-org/react";

import {
  MoonIcon,
  MagicIcon,
  FlashIcon,
  DevicesIcon,
  ServerLinearIcon,
  TagUserLinearIcon,
  MouseCircleLinearIcon,
  CodeDocumentLinearIcon,
  HtmlLogoLinearIcon,
  CubesLinearIcon,
  PaletteIcon,
  CheckLinearIcon,
  RepeatOneBoldIcon,
  InfoBoldIcon,
  FatrowsBoldIcon,
} from "@/components/icons";

export default {
  topFeatures: [
    {
      title: "KĀLOUD云端配方",
      description:
        "KĀLOUD是世界领先的咖啡机云管理系统，为客户提供实时数据展示，以及多样化的配方选择。",
      icon: <ServerLinearIcon className="text-pink-500" />,
    },
    {
      title: "KĀSMOS操作系统",
      description:
        "KĀSMOS无线操作系统为KĀPELLA咖啡机提供便捷的交互方式，智能的交互让他成为您的专属咖啡师!",
      icon: <FatrowsBoldIcon className="text-pink-500" />,
    },
    {
      title: "专利萃取技术",
      description:
        "两段式萃取设计，有水温、水量、研磨度、搅拌、闷蒸、抽出等多项参数调节， 保障萃取细节，还原产品特色。",
      icon: <CodeDocumentLinearIcon className="text-pink-500" />,
    },
    {
      title: "多彩外观",
      description:
        "不一样的色彩，不一样的心情！可根据用户的喜好定制外观颜色，让KĀPELLA和你更合拍！",
      icon: <PaletteIcon className="text-pink-500" />,
    },
  ],
  fullFeatures: [
    {
      title: "React server components",
      description: (
        <>
          All NextUI components already include the <Code>&quot;use client&quot;</Code> directive,
          which means you can import and use them directly in your RSC.
        </>
      ),
      icon: <ServerLinearIcon className="text-pink-500" />,
    },
    {
      title: "Accessible components",
      description:
        "NextUI components follow the WAI-ARIA guidelines, provide keyboard support and sensible focus management.",
      icon: <TagUserLinearIcon className="text-pink-500" />,
    },
    {
      title: "Focus interactions",
      description:
        "Focus ring will appear only when user navigates with keyboard or screen reader.",
      icon: <MouseCircleLinearIcon className="text-pink-500" />,
    },
    {
      title: "Multiple packages",
      description:
        "NextUI is divided into multiple packages, so you can install only the components you need.",
      icon: <CubesLinearIcon className="text-pink-500" />,
    },
    {
      title: "TypeScript based",
      description:
        "Build type safe applications, NextUI has a fully-typed API to minimize the learning curve, and help you build applications.",
      icon: <CodeDocumentLinearIcon className="text-pink-500" />,
    },
    {
      title: "Override components tags",
      description: "A polymorphic `as` prop is included in all NextUI components.",
      icon: <HtmlLogoLinearIcon className="text-pink-500" />,
    },
    {
      title: "No runtime styles",
      description:
        "NextUI is based on Tailwind CSS, it means that there are no runtime styles, and no unnecessary classes in your bundle.",
      icon: <FlashIcon className="text-pink-500" />,
    },
    {
      title: "Beautifully designed",
      description:
        "NextUI components are unique and are not tied to any visual trend or design rule, which makes us unique and of course your projects as well.",
      icon: <MagicIcon className="text-pink-500" />,
    },
  ],
  themingCode: `Q: KĀPELLA全自动精品咖啡机是否适用于高端商场？

A: 是的，KĀPELLA全自动精品咖啡机非常适合高端商场的使用。在这种环境中，顾客期待的不仅仅是购物，他们追求的是一种高品质的消费体验。以下是KĀPELLA全自动精品咖啡机适用于高端商场的几个关键原因：

1. 提升顾客体验
高端商场的顾客通常寻求高品质的服务和产品。KĀPELLA咖啡机能够提供多样化的高品质咖啡选择，满足顾客的期待，从而提升整体的购物体验。

2. 符合高端形象
KĀPELLA咖啡机通常设计精美，能够很好地融入高端商场的装修风格中，进一步强化商场的高端品牌形象。

3. 提供便利服务
提供快捷方便的咖啡饮品服务可以为忙碌的购物者提供休息和放松的机会，这种便利服务能够吸引更多顾客，并促使他们延长在商场的停留时间。

4. 增加收入来源
通过在高端商场内设置KĀPELLA全自动精品咖啡机，商家不仅能提升顾客的满意度和忠诚度，同时也为商场创造了额外的收入来源。

5. 满足高效率的要求
在繁忙的商场环境中，能够快速提供服务是至关重要的。KĀPELLA咖啡机的高效性能保证了在高峰时段也能快速地为顾客提供咖啡饮品，减少等待时间。

6. 易于维护
高端咖啡机如KĀPELLA通常设计有易于操作和维护的特点，这对于商场运营来说是一个重要考虑因素。便捷的维护保证机器长时间稳定运行，减少潜在的运营中断。

总之，KĀPELLA全自动精品咖啡机以其高品质的饮品、优雅的设计以及高效的操作性能，非常适合安置在高端商场内，不仅能够满足高端顾客的需求，还能提升商场的整体服务水平和品牌形象。


Q: KĀPELLA全自动精品咖啡机是否适用于连锁门店？

A: KĀPELLA全自动精品咖啡机非常适合用于连锁门店，尤其是对那些追求高品质服务和统一顾客体验的连锁品牌来说。以下是KĀPELLA咖啡机在连锁门店中使用的一些关键优点：

1. 一致性和高品质
连锁门店需要保持其产品和服务的一致性，以维护品牌的信誉和顾客的忠诚度。KĀPELLA全自动精品咖啡机通过精确的控制和高标准的性能，保证了每一杯咖啡的品质和口味的一致性。

2. 操作简便
全自动的操作减少了对员工技能的依赖，简化了培训过程。这对于快速扩张的连锁门店特别重要，因为它们需要迅速地训练新员工，以保证服务质量和效率。

3. 高效率和快速服务
在忙碌的连锁门店中，能够迅速提供服务对于提高顾客满意度和优化营运效率至关重要。KĀPELLA咖啡机的快速和自动化操作能够满足高峰时段的需求，减少顾客等待时间。

4. 易于维护
KĀPELLA咖啡机通常设计考虑到了易维护性，这意味着日常清洁和维护工作可以快速、有效地完成，确保机器的最佳运行状态，减少潜在的停机时间。

5. 提升品牌形象
使用高端咖啡机如KĀPELLA可以增强连锁门店的品牌形象，表明品牌致力于提供高品质的产品和服务。这种投资可以吸引那些寻求优质咖啡体验的顾客，从而提高整体销售额和顾客满意度。

6. 适应性强
KĀPELLA咖啡机通常具有高度的适应性，能够根据不同地点的需求和偏好提供定制化的咖啡选项。这使得连锁门店能够在保持品牌一致性的同时，也考虑到地域性的顾客偏好。

考虑到上述优点，KĀPELLA全自动精品咖啡机是连锁门店理想的选择，尤其适合那些注重品质、效率和顾客体验的品牌。正确的投资和使用可以帮助连锁门店提升服务质量，增强顾客忠诚度，并推动业务的持续增长。



Q: KĀPELLA全自动精品咖啡机是否适用于娱乐场所？

A: KAPELLA全自动精品咖啡机同样适用于娱乐场所，如夜总会、电影院、游戏室、体育馆等环境。在这类场所，咖啡机不仅提供饮品，也增添了一份特色和舒适的氛围。以下是KAPELLA咖啡机适用于娱乐场所的几个理由：

1. 增强顾客体验：提供高品质的咖啡可以显著提升顾客的整体体验，尤其是在那些顾客可能需要保持清醒或希望享受轻松时光的场合。

2. 多样化的饮品选择：全自动咖啡机通常能够制作多种类型的咖啡饮品，满足不同顾客的需求，从浓缩咖啡到拿铁，甚至热巧克力和茶。

3. 便捷的服务：在忙碌的娱乐场所，快速高效的服务至关重要。全自动咖啡机能够迅速制作出高品质的饮品，减少顾客等待时间，提升服务效率。

4. 节省人力资源：全自动咖啡机的操作简便，可以减轻员工的工作负担，使他们有更多时间专注于提供更好的客户服务，而不是花费大量时间在饮品制作上。

5. 创造收入来源：高品质的咖啡饮品可以作为娱乐场所的一个额外收入来源，尤其是在那些顾客愿意为优质体验支付额外费用的地方。

6. 适应性和可定制性：现代的全自动咖啡机通常具有高度的适应性和可定制性，可以根据娱乐场所的特定需求和偏好调整饮品菜单，甚至定制机器的外观以符合场所的装修风格。

总的来说，KAPELLA全自动精品咖啡机通过提供快速、便捷且高质量的饮品服务，不仅能够增强娱乐场所的顾客体验，还能作为一种吸引顾客和增加收入的手段。在选择咖啡机时，应考虑到娱乐场所的具体需求，包括预期的客流量、空间限制以及预算，以确保选购的设备能够满足需求并提供最佳的性价比。


Q: KĀPELLA全自动精品咖啡机是否适用于大专院校？

A: KĀPELLA全自动精品咖啡机同样适用于大专院校环境，可以为学生、教职工以及访客提供高品质的咖啡体验。以下是几个原因说明为什么它适合用于大专院校：

1. 提升校园环境
安装高品质的咖啡机可以提升校园的整体氛围，营造一个更加舒适和欢迎的学习环境。这不仅对现有的学生和员工有吸引力，也能给校园参观的潜在新生和家长留下好印象。

2. 满足多样化需求
大专院校的师生群体通常年龄和背景各异，他们的饮品偏好也会有很大差异。KĀPELLA咖啡机能够提供多种类型的咖啡选择，包括浓缩咖啡、拿铁、卡布奇诺等，以满足不同人群的需求。

3. 鼓励学习交流
咖啡文化在促进交流和社交方面扮演了重要角色。在图书馆、学生中心或教学楼设置咖啡机可以鼓励学生之间的交流，提供一个放松和讨论的空间。

4. 便捷性
对于经常需要熬夜学习或完成项目的学生来说，能够随时获得高品质咖啡是一个巨大的便利。此外，教职员工也可以在忙碌的工作间隙享受到这一便利。

5. 经济效益
与外部咖啡店相比，校内咖啡机提供的饮品可能更为经济，这对预算有限的学生群体尤其重要。同时，咖啡机的运营可以为学校带来额外的收入来源。

6. 增强校园文化
咖啡在现代学术环境中已成为一种文化符号，代表着交流、合作和创新精神。引入高品质的咖啡服务可以强化这一文化，提升校园的整体形象。

总之，KĀPELLA全自动精品咖啡机以其高效性、易用性和多样化的咖啡制作功能，非常适合部署在大专院校中，不仅能提升校园环境，也能满足师生的日常需求，增强校园社区的凝聚力。


Q: KĀPELLA全自动精品咖啡机是否适用于活动现场？

A: KĀPELLA全自动精品咖啡机非常适合用于活动现场，无论是会议、展览、研讨会还是私人聚会等场合。这类咖啡机的设计旨在为用户提供便捷、快速且高品质的咖啡体验，使其成为各种活动现场的理想选择。以下是几个关键原因：

1. 提供即时服务
活动参与者常常需要即时提神或休息，全自动咖啡机能够快速制作多种咖啡饮品，满足参与者的即时需求，无需长时间等待。

2. 增加活动吸引力
高质量的咖啡饮品可以增加活动的吸引力，特别是对咖啡爱好者而言。优质的咖啡体验能够让活动留下深刻印象，提高参与者的满意度。

3. 适应性强
无论活动规模大小，KĀPELLA咖啡机都能够适应。它们设计有不同的容量和速度，可以根据活动的规模和需求进行选择。

4. 促进社交互动
咖啡区往往成为社交互动的热点区域，人们在等待咖啡期间容易发起对话，增强了活动的网络化和互动性。

5. 节省人力成本
全自动咖啡机操作简便，可以减少现场服务人员的需求，从而节省人力成本。参与者可以自助选择和制作他们喜欢的咖啡饮品。

6. 提升活动档次
KĀPELLA全自动精品咖啡机的高端设计和优质咖啡输出能够提升任何活动的档次，无论是业务会议还是社交聚会，优质咖啡都能够为活动增添一份特别的关注点。

7. 便于管理
这些咖啡机通常配备有易于理解和操作的界面，使得管理和维护变得简单，确保活动期间咖啡供应的连续性和质量。

在选择KĀPELLA咖啡机用于活动现场时，考虑到其适应性、高效性和能够提供的高品质咖啡体验，它确实是增强任何活动体验的理想选择。


Q: KĀPELLA全自动精品咖啡机是否适用于智能家居？

A: KĀPELLA全自动精品咖啡机绝对可以成为智能家居环境中的一员，特别是对于那些追求便利、高效和高品质生活体验的用户来说。将这样一台咖啡机整合到智能家居系统中，可以在多个层面上提升居住体验：

1. 无缝集成
如果KĀPELLA咖啡机具备Wi-Fi连接功能，它可以轻松与智能家居系统集成，如通过语音助手（如Amazon Alexa、Google Assistant或Apple HomeKit）控制，实现远程启动、预设咖啡制作程序等。

2. 个性化体验
智能家居系统可以根据用户的偏好进行个性化设置，同样，KĀPELLA咖啡机如果支持个性化设置，就可以保存多个用户的咖啡制作偏好，每个家庭成员都能轻松享受到自己喜欢的咖啡。

3. 便利性
在忙碌的早晨，能够在床上通过智能手机或语音命令就让咖啡机开始工作，为你准备早晨的第一杯咖啡，无疑为生活增添了极大的便利。

4. 高效能
对于追求效率的用户来说，KĀPELLA咖啡机的快速预热和制作功能意味着几乎不需要等待就能享受到美味的咖啡，非常适合节奏快的生活方式。

5. 节能模式
智能家居注重能效，许多KĀPELLA咖啡机都配备有节能模式，能够在不使用时自动关闭或降低能耗，与智能家居系统的节能理念相契合。

6. 设计与风格
现代的智能家居不仅注重功能，也注重设计和风格。KĀPELLA咖啡机通常拥有时尚的设计，能够和现代家居装饰完美融合，增添一份雅致的氛围。

7. 维护提醒
智能家居设备经常具备故障自诊断和维护提醒功能。如果KĀPELLA咖啡机可以通过智能家居系统报告其状态，提醒用户进行清洁或维护，这将进一步提升用户体验。

将KĀPELLA全自动精品咖啡机整合进智能家居系统，不仅能够提升生活品质，还能使日常咖啡享受变得更加无缝和个性化。这对于那些希望将日常生活自动化、并追求高品质生活体验的用户来说，是一个极好的选择。

`,

  darkModeCode: `import React from "react";
import {NextUIProvider} from "@nextui-org/react";

const Application = ({Component, pageProps}) => {
  return (
    <NextUIProvider>
      <main className={isDark ? "dark" : "light"}>
        <Component {...pageProps} />
      </main>
    </NextUIProvider>
  );
};

export default Application;  
`,
  customizationCode: `import React from 'react';
import {Button} from '@nextui-org/react';
import confetti from 'canvas-confetti';

const CustomButton = () => {
  const handleConfetti = () => {
    confetti({...});
  };

  return (
    <Button
      ref={buttonRef}
      disableRipple
      className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-background/30 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-background/40 after:z-[-1] after:transition after:!duration-500 hover:after:scale-150 hover:after:opacity-0"
      size="lg"
      onPress={handleConfetti}
    >
      Press me
    </Button>
  );
};

export default CustomButton;
`,
  a11yExampleCode: `import {
  Button,
  Dropdown,
  DropdownSection,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

import {
  AddNoteBulkIcon,
  CopyDocumentBulkIcon,
  EditDocumentBulkIcon,
  DeleteDocumentBulkIcon,
} from "@nextui-org/shared-icons";

const iconClasses = "text-2xl text-default-500 pointer-events-none flex-shrink-0";

export const Example = () => {
  return (
    <Dropdown className="shadow-xl" placement="bottom">
      <DropdownTrigger>
        <Button color="success" variant="flat">
          Actions
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        closeOnSelect
        aria-label="Actions"
        color="default"
        variant="flat"
      >
        <DropdownSection title="Actions">
          <DropdownItem
            key="new"
            description="Create a new file"
            shortcut="⌘N"
            startContent={<AddNoteBulkIcon className={iconClasses} />}
          >
            New file
          </DropdownItem>
          <DropdownItem
            key="copy"
            description="Copy the file link"
            shortcut="⌘C"
            startContent={<CopyDocumentBulkIcon className={iconClasses} />}
          >
            Copy link
          </DropdownItem>
          <DropdownItem
            key="edit"
            description="Allows you to edit the file"
            shortcut="⌘⇧E"
            startContent={<EditDocumentBulkIcon className={iconClasses} />}
          >
            Edit file
          </DropdownItem>
        </DropdownSection>
        <DropdownSection title="Danger zone">
          <DropdownItem
            key="delete"
            className="text-danger"
            color="danger"
            description="Permanently delete the file"
            shortcut="⌘⇧D"
            startContent={
              <DeleteDocumentBulkIcon
                className={clsx(iconClasses, "!text-danger")}
              />
            }
          >
            Delete file
          </DropdownItem>
        </DropdownSection>
      </DropdownMenu>
    </Dropdown>
  );
};
`,
  darkModeExampleCode: `import {Card, CardBody, Button, Image, Progress, CardProps} from "@nextui-org/react";
import {useState, FC} from "react";
import {clsx} from "@nextui-org/shared-utils";

import {
  PauseCircleBoldIcon,
  NextBoldIcon,
  PreviousBoldIcon,
  RepeatOneBoldIcon,
  ShuffleBoldIcon,
  HeartLinearIcon,
} from "your-icons-package";

export interface MusicPlayerProps extends CardProps {}

export const MusicPlayer: FC<MusicPlayerProps> = ({className, ...otherProps}) => {
  const [liked, setLiked] = useState(false);

  return (
    <Card
      isBlurred
      className={clsx("border-none bg-background/60 dark:bg-default-100/50", className)}
      shadow="sm"
      {...otherProps}
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              classNames={{
                base: "shadow-black/20",
              }}
              height={200}
              shadow="lg"
              src="/images/album-cover.png"
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-foreground/90">Daily Mix</h3>
                <p className="text-sm text-foreground/80">12 Tracks</p>
                <h1 className="text-lg font-medium mt-2">Frontend Radio</h1>
              </div>
              <Button
                isIconOnly
                className="text-default-900/60 data-[hover]:bg-foreground/10 -translate-y-2 translate-x-2"
                radius="full"
                variant="light"
                onPress={() => setLiked((v) => !v)}
              >
                <HeartLinearIcon
                  className={liked ? "[&>path]:stroke-transparent" : ""}
                  fill={liked ? "currentColor" : "none"}
                />
              </Button>
            </div>

            <div className="flex flex-col mt-3 gap-1">
              <Progress
                aria-label="Music progress"
                classNames={{
                  indicator: "bg-default-800 dark:bg-white",
                  track: "bg-default-500/30",
                }}
                color="default"
                size="sm"
                value={33}
              />
              <div className="flex justify-between">
                <p className="text-sm">1:23</p>
                <p className="text-sm text-foreground/50">4:32</p>
              </div>
            </div>

            <div className="flex w-full items-center justify-center">
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <RepeatOneBoldIcon className="text-foreground/80" />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PreviousBoldIcon />
              </Button>
              <Button
                isIconOnly
                className="w-auto h-auto data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <PauseCircleBoldIcon size={54} />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <NextBoldIcon />
              </Button>
              <Button
                isIconOnly
                className="data-[hover]:bg-foreground/10"
                radius="full"
                variant="light"
              >
                <ShuffleBoldIcon className="text-foreground/80" />
              </Button>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};
`,
};
