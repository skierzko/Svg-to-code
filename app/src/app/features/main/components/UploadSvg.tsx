"use client";

import { useState } from "react";
import DragDropUpload from "@/app/components/DragDropUpload";

interface UploadSvgProps {
  onFilesUpload: (files: File[]) => void;
  files: File[];
}

export default function UploadSvg({
  onFilesUpload,
  files: initialFiles,
}: UploadSvgProps) {
  const [files, setFiles] = useState<File[]>([]);

  const handleFiles = (newFiles: File[]) => {
    setFiles(newFiles);
    onFilesUpload(newFiles);
  };

  return (
    <div className="flex-1 mb-4 sm:mb-0 p-4 bg-white rounded-md">
      <p className="text-xl mb-2">Upload your SVG</p>

      <DragDropUpload accept="image/svg+xml" onFilesUpload={handleFiles} files={files} />
    </div>
  );
}
