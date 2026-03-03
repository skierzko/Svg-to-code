"use client";

import { useState } from "react";
import styles from "./ViewSvg.module.css";

interface ViewSvgProps {
  svgCode: string;
  isSticky: boolean;
}

export default function ViewSvg({ svgCode, isSticky }: ViewSvgProps) {
  const [isOpened, setIsOpened] = useState<boolean>(!isSticky);

  return (
    <>
      <div
        className={`${isSticky ? "fixed w-75 top-0 right-0 mb-4 sm:mb-0 p-2 bg-white rounded-b shadow-md border border-gray-300" : ""}
        ${isSticky && isOpened === false && "opacity-90 bg-white/60"}
      ${!isSticky ? "flex-1 mb-4 sm:mb-0 p-4 bg-white rounded-md" : ""}`}
      >
        <div
          className={`flex  items-center ${isSticky ? "text-sm font-bold" : "text-xl"}`}
        >
          <p className="flex-1">{isSticky ? "Quick preview" : "View Image"}</p>

          {isSticky && (
            <div
              className={`flex gap-2 px-2 rounded-sm items-center cursor-pointer bg-gray-100 hover:bg-gray-200`}
              onClick={() => setIsOpened(!isOpened)}
            >
              <span className="text-sm">{isOpened ? "Collapse" : "Expand"}</span>
              {isOpened === false && (
                <svg
                  className="w-6 h-6 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M8 4H4m0 0v4m0-4 5 5m7-5h4m0 0v4m0-4-5 5M8 20H4m0 0v-4m0 4 5-5m7 5h4m0 0v-4m0 4-5-5"
                  />
                </svg>
              )}

              {isOpened && (
                <svg
                  className="w-6 h-6 inline-block"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 9h4m0 0V5m0 4L4 4m15 5h-4m0 0V5m0 4 5-5M5 15h4m0 0v4m0-4-5 5m15-5h-4m0 0v4m0-4 5 5"
                  />
                </svg>
              )}
            </div>
          )}
        </div>

        <div
          className={`flex flex-col h-50 mt-2 items-center justify-center border border-gray-500 border-dashed rounded-md p-4 ${isOpened ? "" : "hidden"}`}
        >
          <p
            className={`text-gray-400 overflow-auto ${styles.view}`}
            dangerouslySetInnerHTML={{ __html: svgCode }}
          ></p>

          {(svgCode === null || svgCode === "") && (
            <svg
              className="w-20 h-20 text-gray-300"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="0.6"
                d="m3 16 5-7 6 6.5m6.5 2.5L16 13l-4.286 6M14 10h.01M4 19h16a1 1 0 0 0 1-1V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Z"
              />
            </svg>
          )}
        </div>
      </div>
    </>
  );
}
