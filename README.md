# SVG to HTML Converter

A web application built with Next.js that allows you to convert SVG files into clean, ready-to-use HTML code.  
The project is designed for frontend developers, designers, and anyone who wants to quickly transform vector graphics into production-friendly markup.

## 🌐 Portfolio

[![Portfolio](https://img.shields.io/badge/Visit-My_Portfolio-111?style=for-the-badge&logo=github&logoColor=white)](https://kierzkowski.net)

## 🚀 Features

- 📂 Upload `.svg` files
- 🔄 Automatic conversion to structured HTML
- 🧹 Code cleanup and basic optimization
- 📋 One-click copy to clipboard
- 👀 Live preview

## 🛠 Tech Stack

- Next.js
- React
- TypeScript
- Tailwind CSS

## 🎯 Project Goal

The goal of this application is to simplify working with SVG assets and speed up the process of implementing vector graphics in web projects.

Instead of manually cleaning or restructuring SVG markup, users can instantly generate clean HTML output ready for integration.

# 📦 Installation

To launch the application, you must complete the following steps.

To start the production version, replace **compose.dev.yaml** with **compose.prod.yaml**

1. Create a network

   ```
   docker network create svg_network
   ```

2. Build dev

   ```
   docker compose -f compose.dev.yaml build
   ```

3. Up dev

   ```
   docker compose -f compose.dev.yaml up
   ```

4. Go to app catalog

   ```
   cd app
   ```

5. Run npm install
   ```
   npm install
   ```

# 📄 License

This project is released as open-source software under the MIT License.

You are free to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the software, provided that the copyright notice and the MIT License text are included in all copies or substantial portions of the software.

The software is provided “as is”, without warranty of any kind, express or implied.
