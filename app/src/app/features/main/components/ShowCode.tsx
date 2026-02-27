"use client";

import { useState } from "react";

import React from "react";

export default class ShowCode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ''
    };
  }

  handleChange = (e) => {
    this.setState({ text: e.target.value });
  };

  render() {
    return (
      <div className="flex-1 gap-4 m-4 bg-white rounded-md p-4">
        <p className="text-xl mb-2">Code</p>
        <div className="flex-1 items-center justify-center border border-gray-500 border-dashed rounded-md p-4 select-text">
          <textarea
            value={this.state.text}
            onChange={this.handleChange}
            placeholder="Generated code will appear here"
            className="min-h-40 text-gray-400 w-full h-full"
          ></textarea>
        </div>
      </div>
    );
  }
}