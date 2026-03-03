"use client";

import { useState, useEffect, Fragment } from "react";

interface SvgOptionProps {
  node: Node | Element | SVGSVGElement | SVGPathElement | null;
  index: number;
  allowed: string[];
  elementName: string;
  handleOverloadSource: () => void;
}

interface Attribute {
  name: string;
  value: string;
}

export default function TagAttributes({
  node,
  index,
  allowed,
  elementName,
  handleOverloadSource,
}: SvgOptionProps) {
  const [attributes, setAttributes] = useState<Attribute[]>([]);

  useEffect(() => {
    if (!node) return;
    if (!(node instanceof Element)) return;

    const nodeAttributes = node.attributes;

    if (!nodeAttributes) return;

    const attrs = Array.from(nodeAttributes)
      .map((attr) => ({
        name: attr.name,
        value: attr.value,
      }))
      .filter((element) => allowed.includes(element.name));

    setAttributes(attrs);
  }, [node]);

  const changeElement = (tagName: any, value: any) => {
    if (node === null) return;
    if (!(node instanceof Element)) return;

    node.setAttribute(tagName, value);

    setAttributes((prev) =>
      prev.map((attr) => (attr.name === tagName ? { ...attr, value } : attr)),
    );

    handleOverloadSource();
  };

  if (!attributes.length) return null;

  return (
    <div className="ml-2 p-3 bg-gray-50 border-b border-b-gray-300">
      <div className="text-xs mb-2">
        Element {elementName} {index + 1} (Attributes: {attributes.length})
      </div>
      <div className="grid gap-2 grid-cols-[auto_1fr]">
        {attributes.map((attr, index) => (
          <Fragment key={`${attr.name}-${index}`}>
            <strong>{attr.name}:</strong>
            <input
              id={`${attr.name}-${index}`}
              className="w-3/4 ml-2 px-2 bg-white border border-gray-500 rounded-sm"
              type="text"
              defaultValue={String(attr.value ?? "")}
              onChange={(e) => changeElement(attr.name, e.target.value)}
            />
          </Fragment>
        ))}
      </div>
    </div>
  );
}
