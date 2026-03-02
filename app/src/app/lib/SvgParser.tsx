export default class SvgParser {
  static readSvg = async (file: File): Promise<string> => {
    const content = await file.text();
    const match = content.match(/<svg[\s\S]*?<\/svg>/i);

    if (match) {
      return match[0];
    }

    return "";
  };

  static parseToNodes = (svgCode: string): Node | null => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(svgCode, "image/svg+xml");

    const svg = doc.querySelector("svg");
    if (!svg) return null;

    return svg;
  };

  static formatNodesToHtml(node: Node, depth: number): string {
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
        result += this.formatNodesToHtml(child, depth + 1);
      });

      result += indent + `</${tagName}>` + "\n";
    }

    return result;
  }
}
