"use client";

import { useRef, useState, DragEvent, ChangeEvent } from "react";

interface DragDropUploadProps {
  onFilesUpload: (files: File[]) => void;
  accept?: string;
  multiple?: boolean;
  files: File[];
}

export default function DragDropUpload({
  onFilesUpload,
  accept = "*",
  multiple = false,
  files = [],
}: DragDropUploadProps) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFiles = (fileList: FileList) => {
    const newFiles = Array.from(fileList);
    onFilesUpload(newFiles);
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files);
      e.dataTransfer.clearData();
    }
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      handleFiles(e.target.files);
    }
  };

  return (
    <>
      <div
        className={`
                flex flex-col p-4 h-50 items-center justify-center border border-gray-500 border-dashed rounded-md 
                ${isDragging && "border-2 border-solid border-blue-500"}
            `}
        onClick={() => inputRef.current?.click()}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        Click to upload your SVG file here
        <input
          ref={inputRef}
          type="file"
          style={{ display: "none" }}
          onChange={handleInputChange}
          accept={accept}
          multiple={multiple}
        />
        <p className="text-gray-400">or drag & drop your SVG</p>
      </div>
      <div>
        {files.length > 0 && (
          <ul style={{ marginTop: "16px" }}>
            {files.map((file, index) => (
              <li key={index}>
                {file.name} ({Math.round(file.size / 1024)} KB)
              </li>
            ))}
          </ul>
        )}
      </div>

      {files.length > 0 && (
        <div className="flex justify-end">
          <button
            onClick={() => onFilesUpload([])}
            className="mt-4 px-4 py-2 bg-sky-500 text-white rounded-md hover:bg-sky-600"
          >
            Convert to code
          </button>
        </div>
      )}
    </>
  );
}
