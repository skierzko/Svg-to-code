"use client";

import ShowCode from "./components/ShowCode";
import UploadSvg from "./components/UploadSvg";
import ViewSvg from "./components/ViewSvg";

export default function MainPage() {
  return <>
      <section className="text-center my-8">
        <h1 className="text-3xl">Convert SVG to Code</h1>
        <p className="text-lg text-gray-700">Upload an SVG file to generate corresponding code</p>
      </section>

      <div className="sm:flex gap-4 m-4">
        <UploadSvg />
        <ViewSvg />
      </div>

      <ShowCode />
  </>;
}