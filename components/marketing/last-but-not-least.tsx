/* eslint-disable react/display-name */

import { title, subtitle, titleWrapper, sectionWrapper } from "@/components/primitives";
import { FeaturesGrid } from "@/components/marketing/features-grid";
import landingContent from "@/content/landing";

export const LastButNotLeast = () => {
  return (
    <section className={sectionWrapper({ class: "mt-16 lg:mt-44" })}>
      <div className="flex flex-col gap-0 md:gap-8">
        <div>
          <div className={titleWrapper({ class: "items-center" })}>
            <div>
              <h1 className={title({ size: "lg", color: "blue" })}>SMART&nbsp;</h1>
              <h1 className={title({ size: "lg", color: "pink" })}>PRO</h1>
            </div>
          </div>
          <p
            className={subtitle({
              class: "mt-4 md:w-full text-center flex justify-center items-center",
            })}
          >
            更多型号，只为精准匹配企业需求
          </p>
        </div>
        {/* <FeaturesGrid features={landingContent.fullFeatures} /> */}

        <div className="container mx-auto pt-10 md:p-2 overflow-x-auto max-w-[1000px]">
          <table className="w-full">
            <caption className="sr-only">价格表</caption>
            <thead>
              <tr>
                <th></th>
                <th scope="col">
                  <h2 className="px-2 text-lg font-bold">SMART</h2>
                  <p className="mb-3">
                    <span className="text-xl font-bold dark:text-gray-50">35,000¥</span>
                    <span className="font-medium dark:text-gray-400">/台</span>
                  </p>
                </th>
                <th scope="col">
                  <h2 className="px-2 text-lg font-bold">PRO</h2>
                  <p className="mb-3">
                    <span className="text-xl font-bold dark:text-gray-50">45,000¥</span>
                    <span className="font-medium dark:text-gray-400">/台</span>
                  </p>
                </th>
              </tr>
            </thead>
            <tbody className="space-y-6 text-center divide-y dark:divide-gray-700">
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">台下设备尺寸</h3>
                </th>
                <td colSpan={2}>
                  <span className="block">480*520*850mm(长*深*高)</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">咖啡豆研磨</h3>
                </th>
                <td>
                  <span className="block">自带三段式手动调节研磨器</span>
                </td>
                <td>
                  <span className="block">自动调节研磨器</span>
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">萃取方式</h3>
                </th>
                <td colSpan={2}>
                  专利组合式萃取
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">过滤方式</h3>
                </th>
                <td>
                  金属滤网过滤
                </td>
                <td>
                  滤纸过滤
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">锅炉容量</h3>
                </th>
                <td>
                  4L
                </td>
                <td>
                  3L+4L双锅炉
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">供水接口</h3>
                </th>
                <td colSpan={2}>
                  3分快插
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">预设冲泡时间</h3>
                </th>
                <td colSpan={2}>
                  90S
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">预设容量</h3>
                </th>
                <td>
                  150-300ml
                </td>
                <td>
                  150-450ml
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">配方保存量</h3>
                </th>
                <td colSpan={2}>
                  后台海量配方
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">制作方式</h3>
                </th>
                <td colSpan={2}>
                  云端配方下发，小程序制作
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">可调整参数</h3>
                </th>
                <td colSpan={2}>
                  水温、水量、预浸泡、加压闷蒸、空气搅拌、抽出力度等30多项参数
                </td>
              </tr>
              <tr>
                <th scope="row" className="text-left">
                  <h3 className="py-3">功率</h3>
                </th>
                <td>
                  580W
                </td>
                <td>
                  2400W
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
