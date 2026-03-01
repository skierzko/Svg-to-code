"use client";

import styles from "./ViewSvg.module.css";

interface ViewSvgProps {
  svgCode: string;
}

export default function ViewSvg({ svgCode }: ViewSvgProps) {
  return (
    <div className="flex-1 mb-4 sm:mb-0 p-4 bg-white rounded-md">
      <p className="text-xl mb-2">View Image</p>

      <div className="flex flex-col h-50 items-center justify-center border border-gray-500 border-dashed rounded-md p-4">
        <p
          className={`text-gray-400 overflow-auto ${styles.view}`}
          dangerouslySetInnerHTML={{ __html: svgCode }}
        ></p>
      </div>
    </div>
  );
}
