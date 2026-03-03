"use client";

import { useState } from "react";

interface ShowCodeProps {
  svgCode: string;
}

export default function ShowCode({ svgCode }: ShowCodeProps) {
  const handleChange = (e: any) => {};
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!svgCode) return;

    await navigator.clipboard.writeText(svgCode);

    setCopied(true);

    setTimeout(() => {
      setCopied(false);
    }, 5000);
  };

  return (
    <div className="flex-1 gap-4 m-4 bg-white rounded-md p-4">
      <p className="text-xl mb-2">Code</p>
      <div className="flex-1 items-center justify-center border border-gray-500 border-dashed rounded-md p-4 select-text">
        <textarea
          value={svgCode}
          onChange={handleChange}
          placeholder="Generated code will appear here"
          className="min-h-40 text-gray-400 w-full h-full"
        ></textarea>
      </div>

      <div className="flex gap-4 items-center mt-2">
        {svgCode !== null && svgCode !== "" && (
          <button
            onClick={handleCopy}
            className="cursor-pointer px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md"
          >
            Copy to dashboard
          </button>
        )}

        {copied && <p className="text-blue-500 text-sm">Copied to clipboard</p>}
      </div>
    </div>
  );
}
