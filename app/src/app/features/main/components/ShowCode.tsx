"use client";

interface ShowCodeProps {
  svgCode: string;
}

export default function ShowCode({ svgCode }: ShowCodeProps) {
  const handleChange = (e: any) => {};

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
    </div>
  );
}
