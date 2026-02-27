"use client";

export default function UploadSvg() {
  return <div className="flex-1 mb-4 sm:mb-0 p-4 bg-white rounded-md">
          <p className="text-xl mb-2">Upload your SVG</p>

          <div className="flex flex-col h-50 items-center justify-center border border-gray-500 border-dashed rounded-md p-4">
            Upload your SVG file here:
            <input type="file" accept=".svg" className="mb-4" />
            <p className="text-gray-400">or drag & drop your SVG</p>
          </div>
        </div>;
}