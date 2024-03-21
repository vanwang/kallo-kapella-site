"use client";

import { Image } from "@nextui-org/react";

import { Blockquote } from "@/components/docs/components/blockquote";
import { FigmaButton } from "@/components/figma-button";

export default function FigmaPage() {
  return (
    <>
      <main className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
        <section className="w-full flex flex-col items-center lg:px-16 mt-12 gap-6">
          <div className="text-center max-w-xl">
            <h1 className="mb-2 font-bold text-4xl">联系我们</h1>
            <h5 className="text-default-500 text-lg">
              我们重视与客户的每一次沟通，期待您的来访来电！
            </h5>
          </div>

          <div className="w-full mt-10">
            <h1 className="mb-2 font-bold text-4xl text-left">地址</h1>
            <h3 className="text-xl">
              北京市朝阳区酒仙桥路10号35号楼3层恒空间3037
            </h3>
          </div>


          <div className="px-4 py-16 mx-auto w-full lg:py-20">
            <div className="grid gap-10 mx-auto sm:grid-cols-2 lg:grid-cols-3">
              <div className="bg-gray-50 rounded-lg text-center shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <img
                    className="object-contain m-auto rounded"
                    src="https://kalloka.oss-cn-beijing.aliyuncs.com/site/contact/ziwei.jpg"
                    alt="张子威"
                  />
                </div>
                <div className="flex flex-col text-center pt-2 pb-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    张子威
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">客户专员</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg text-center shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <img
                    className="object-contain m-auto rounded"
                    src="https://kalloka.oss-cn-beijing.aliyuncs.com/site/contact/zmiao.jpg"
                    alt="张淼"
                  />
                </div>
                <div className="flex flex-col text-center pt-2 pb-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    张淼
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">商务代表</span>
                </div>
              </div>

              <div className="bg-gray-50 rounded-lg text-center shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <img
                    className="object-contain m-auto rounded"
                    src="https://kalloka.oss-cn-beijing.aliyuncs.com/site/contact/echo.jpg"
                    alt="卢华"
                  />
                </div>
                <div className="flex flex-col text-center pt-2 pb-5">
                  <h3 className="text-xl font-bold tracking-tight text-gray-900 dark:text-white">
                    卢华
                  </h3>
                  <span className="text-gray-500 dark:text-gray-400">商务代表</span>
                </div>
              </div>
            </div>
          </div>

        </section>
      </main>
      <div
        aria-hidden="true"
        className="fixed hidden dark:md:block dark:opacity-70 -bottom-[40%] -left-[20%] z-0"
      >
        <Image removeWrapper alt="docs left background" src="/gradients/docs-left.png" />
      </div>
      <div
        aria-hidden="true"
        className="fixed hidden dark:md:block dark:opacity-70 -top-[80%] -right-[60%] 2xl:-top-[60%] 2xl:-right-[45%] z-0 rotate-12"
      >
        <Image removeWrapper alt="docs right background" src="/gradients/docs-right.png" />
      </div>
    </>
  );
}
