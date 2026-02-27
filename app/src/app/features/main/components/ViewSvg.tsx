import React from "react";

export default class ViewSvg extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imageSrc: null,
    };
  }

  render() {
    const { imageSrc } = this.state;

    return (
      <div className="flex-1 mb-4 sm:mb-0 p-4 bg-white rounded-md">
        <p className="text-xl mb-2">View Image</p>

        <div className="flex flex-col h-50 items-center justify-center border border-gray-500 border-dashed rounded-md p-4">
          {imageSrc ? (
            <img src={imageSrc} alt="SVG Preview" className="max-h-full" />
          ) : (
            <p className="text-gray-400">Image preview will appear here</p>
          )}
        </div>
      </div>
    );
  }
}