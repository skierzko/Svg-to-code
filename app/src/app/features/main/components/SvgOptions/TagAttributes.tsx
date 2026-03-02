"use client";

import { useState, useEffect } from "react";

interface SvgOptionProps {
  node: Element | SVGSVGElement | SVGPathElement;
  index: number;
  allowed: string[];
  elementName: string;
}

export default function TagAttributes({
  node,
  index,
  allowed,
  elementName,
}: SvgOptionProps) {
  const [attributes, setAttributes] = useState<{ name: string; value: string }[]>([]);

  useEffect(() => {
    if (!node) return;

    const attrs = Array.from(node.attributes)
      .map((attr) => ({
        name: attr.name,
        value: attr.value,
      }))
      .filter((element) => allowed.includes(element.name));

    setAttributes(attrs);
  }, [node]);

  return (
    <div className="ml-2p-3 bg-gray-50 border-b border-b-gray-300">
      <div className="text-xs">
        Element {elementName} {index + 1}
      </div>
      <ul className={"ml-4"}>
        {attributes.map((attr) => (
          <li key={attr.name}>
            <strong>{attr.name}:</strong> {attr.value}
          </li>
        ))}

        {!attributes && <p>Empty list</p>}
      </ul>
    </div>
  );
}
