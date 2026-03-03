"use client";

import { useState, useEffect } from "react";
import ShowCode from "./components/ShowCode";
import UploadSvg from "./components/UploadSvg";
import ViewSvg from "./components/ViewSvg/ViewSvg";
import SvgParser from "@/app/lib/SvgParser";
import SvgOptions from "./components/SvgOptions/SvgOptions";

export default function MainPage() {
  const [files, setFiles] = useState<File[]>([]);
  const [svgCode, setSvgCode] = useState<string>("");
  const [svgNodes, setSvgNodes] = useState<Node | SVGSVGElement | null>(null);
  const [pathNodes, setPathNodes] = useState<SVGPathElement[] | null>(null);

  useEffect(() => {
    if (!files || files.length === 0) {
      setSvgCode("");
      setPathNodes(null);
      return;
    }

    const loadSvg = async () => {
      const svg = await SvgParser.readSvg(files[0]);
      const nodes = SvgParser.parseToNodes(svg);

      if (nodes) {
        setSvgNodes(nodes);
        const paths = (nodes as Element).querySelectorAll("path");

        if (paths) {
          setPathNodes([...paths]);
        }

        const formattedSvg = SvgParser.formatNodesToHtml(nodes, 0);
        setSvgCode(formattedSvg);
        return;
      }

      setSvgCode("");
    };

    loadSvg();
  }, [files]);

  const reloadSourceCode = () => {
    if (svgNodes === null) {
      return;
    }

    const formattedSvg = SvgParser.formatNodesToHtml(svgNodes, 0);
    setSvgCode(formattedSvg);
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
        <ViewSvg svgCode={svgCode} isSticky={false} />
      </div>

      {svgCode && svgNodes && (
        <SvgOptions
          svgNode={svgNodes}
          pathNodes={pathNodes}
          reloadSourceCode={reloadSourceCode}
        />
      )}

      <ShowCode svgCode={svgCode} />

      {svgCode && <ViewSvg svgCode={svgCode} isSticky={true} />}
    </>
  );
}
