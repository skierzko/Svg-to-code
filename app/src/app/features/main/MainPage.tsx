"use client";

import { useState, useEffect } from "react";
import ShowCode from "./components/ShowCode";
import UploadSvg from "./components/UploadSvg";
import ViewSvg from "./components/ViewSvg/ViewSvg";

export default function MainPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [svgCode, setSvgCode] = useState<string>("");

  useEffect(() => {
    if (!files || files.length === 0) {
      setSvgCode("");
      return;
    }

    const readSvg = async () => {
      const content = await files[0].text();

      const match = content.match(/<svg[\s\S]*?<\/svg>/i);

      if (match) {
        const fullSvg = match[0];
        const formattedSvg = formatSvg(fullSvg);

        setSvgCode(formattedSvg);
      }
    };

    readSvg();
  }, [files]);

  const formatSvg = (svgString: string): string => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgString, "image/svg+xml");

    const svg = doc.querySelector("svg");
    if (!svg) return svgString;

    function formatNode(node: Node, depth: number): string {
      const indent = "\t".repeat(depth);
      let result = "";

      if (node.nodeType === Node.TEXT_NODE) {
        const text = node.textContent?.trim();
        if (text) {
          result += indent + text + "\n";
        }
        return result;
      }

      if (node.nodeType === Node.ELEMENT_NODE) {
        const el = node as Element;

        const tagName = el.tagName;
        const attributes = Array.from(el.attributes)
          .map((attr) => `${attr.name}="${attr.value}"`)
          .join(" ");

        const openTag = attributes ? `<${tagName} ${attributes}>` : `<${tagName}>`;

        result += indent + openTag + "\n";

        el.childNodes.forEach((child) => {
          result += formatNode(child, depth + 1);
        });

        result += indent + `</${tagName}>` + "\n";
      }

      return result;
    }

    return formatNode(svg, 0);
  };

  return (
    <>
      <section className="text-center my-8">
        <h1 className="text-3xl">Convert SVG to Code</h1>
        <p className="text-lg text-gray-700">
          Upload an SVG file to generate corresponding code
        </p>
      </section>

      <div className="sm:flex gap-4 m-4">
        <UploadSvg files={files} onFilesUpload={setFiles} />
        <ViewSvg svgCode={svgCode} />
      </div>

      <ShowCode svgCode={svgCode} />
    </>
  );
}
