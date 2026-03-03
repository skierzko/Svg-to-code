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
  const [showDescription, setShowDescription] = useState<boolean>(false);

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
      <section className="text-center mt-8 mb-2">
        <h1 className="text-3xl">Convert SVG to Code</h1>
        <p className="p-2 text-lg text-gray-700">
          Upload an SVG file to generate corresponding code
        </p>
      </section>

      <section className="px-6 space-y-2 text-sm text-gray-400">
        <p>
          This web-based tool enables fast and convenient conversion of SVG files into
          HTML code. Simply select a file from your disk or drag and drop it into the
          designated area to instantly generate the corresponding code.
        </p>

        {showDescription === false && (
          <div
            className="inline-block cursor-pointer text-black hover:text-blue-500"
            onClick={() => setShowDescription(true)}
          >
            Show more
          </div>
        )}

        {showDescription && (
          <p>
            The solution is designed for designers and developers who need full control
            over the structure and attributes of SVG elements. In addition to conversion,
            it allows real-time editing of existing tag attributes. Every change is
            immediately reflected in both the preview and the generated HTML code,
            significantly streamlining the optimization and customization process.
          </p>
        )}
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

      <section className="p-6 py-20 border-t-2 bg-slate-900 text-white">
        <h2 className="mb-8 text-3xl">About the Project</h2>
        <p className="mb-2">
          This project was created as a personal initiative to improve my skills in
          building modern web applications using <strong>Next.js</strong>,{" "}
          <strong>React</strong>, <strong>Tailwind</strong> and <strong>Docker</strong>.
        </p>
        <p className="mb-2">
          Its main goal is to deepen practical knowledge of frontend architecture,
          component-based development, state management, and real-time data handling in
          React, while also gaining hands-on experience with server-side rendering and
          application structure in Next.js.
        </p>
        <p className="mb-2">
          Additionally, the project serves as an opportunity to strengthen my
          understanding of containerization and deployment workflows using Docker,
          including environment configuration and application packaging.
        </p>
        <p className="mb-6">
          Beyond its practical functionality, this project represents a continuous
          learning process and a step forward in mastering modern web development tools
          and best practices.
        </p>
        <p className="mb-2">
          View the source code on GitHub:
          <a
            href="https://github.com/skierzko/Svg-to-code"
            target="_blank"
            className="text-blue-600 hover:underline ml-2"
          >
            GitHub Repository
          </a>
        </p>
        <p className="mb-2">
          Go to the author's portfolio:
          <a
            href="https://kierzkowski.net"
            target="_blank"
            className="text-blue-600 hover:underline ml-2"
          >
            Portfolio
          </a>
        </p>
      </section>

      <section>
        <div className="p-6 py-10 bg-gray-800 text-white text-center">
          <p>© 2026 Sylwester Kierzkowski.</p>
          <p>
            Designed and developed by Sylwester Kierzkowski. This project is open for
            copying, modification, and use for any purpose.
          </p>
        </div>
      </section>
    </>
  );
}
