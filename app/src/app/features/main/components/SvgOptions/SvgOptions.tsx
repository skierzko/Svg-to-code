"use client";

import TagAttributes from "./TagAttributes";

interface SvgOptionsProps {
  svgNode: Node | SVGSVGElement | null;
  pathNodes: SVGPathElement[] | null;
}

export default function SvgOptions({ svgNode, pathNodes }: SvgOptionsProps) {
  return (
    <div className="flex-1 gap-4 m-4 bg-white rounded-md p-4">
      <p className="text-xl mb-2">Options</p>

      <div className="grid grid-cols-1 gap-2">
        <p>Svg tag options:</p>

        <TagAttributes
          allowed={[
            "width",
            "height",
            "viewBox",
            "fill",
            "stroke",
            "stroke-width",
            "opacity",
            "transform",
            "class",
            "role",
            "tabindex",
            "version",
            "preserveAspectRatio",
            "pointer-events",
            "mask",
            "clip-path",
            "filter",
          ]}
          node={svgNode}
          index={0}
          elementName={"SVG"}
        />

        <p>Tags options:</p>

        {pathNodes &&
          pathNodes.map((pathNode, index) => (
            <TagAttributes
              allowed={[
                "style",
                "fill",
                "stroke",
                "stroke-width",
                "stroke-linecap",
                "stroke-linejoin",
                "opacity",
                "transform",
                "id",
                "class",
              ]}
              node={pathNode}
              index={index}
              key={"path-" + index}
              elementName={"PATH"}
            />
          ))}
      </div>
    </div>
  );
}
