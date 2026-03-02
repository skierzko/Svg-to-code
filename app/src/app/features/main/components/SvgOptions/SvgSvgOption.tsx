"use client";

import { useState, useEffect } from "react";

interface SvgOptionProps {
  pathNode: SVGPathElement;
  index: number;
}

export default function SvgSvgOption({ pathNode, index }: SvgOptionProps) {
  const [attributes, setAttributes] = useState<{ name: string; value: string }[]>([]);
  const allowed = [
    "width",
    "height",
    "viewBox",
    "fill",
    "stroke",
    "stroke-width",
    "opacity",
    "transform",
    "id",
    "class",
    "role",
    "tabindex",
    "xmlns",
    "xmlns:xlink",
    "version",
    "preserveAspectRatio",
    "pointer-events",
    "mask",
    "clip-path",
    "filter",
  ];

  useEffect(() => {
    if (!pathNode) return;

    const attrs = Array.from(pathNode.attributes)
      .map((attr) => ({
        name: attr.name,
        value: attr.value,
      }))
      .filter((element) => allowed.includes(element.name));

    setAttributes(attrs);
  }, [pathNode]);

  return (
    <div className="p-3 bg-gray-50 border-b border-b-gray-300">
      <div className="text-xs">Path {index + 1}</div>
      <ul>
        {attributes.map((attr) => (
          <li key={attr.name}>
            <strong>{attr.name}:</strong> {attr.value}
          </li>
        ))}
      </ul>
    </div>
  );
}
